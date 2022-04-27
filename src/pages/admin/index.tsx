import * as React from 'react';
import {RouteComponentProps, Route, Link, Switch, Redirect, matchPath} from 'react-router-dom';
import {
    Layout,
    Button,
    AsideNav,
    Spinner
} from 'amis';
import {IMainStore} from '@/stores';
import {inject, observer} from 'mobx-react';
import {request} from '@/utils/requestInterceptor';
import RouterGuard from "@/routes/RouterGuard";
import {toast} from "amis";

type NavItem = {
    label: string;
    children?: Array<NavItem>;
    icon?: string;
    path?: string;
    component?: React.ReactType;
    getComponent?: () => Promise<React.ReactType>;
};


function isActive(link: any, location: any) {
    const ret = matchPath(location.pathname, {
        path: link ? link.replace(/\?.*$/, '') : '',
        exact: true,
        strict: true
    });

    return !!ret;
}

export interface AdminProps extends RouteComponentProps<any> {
    store: IMainStore
}

@inject("store")
@observer
export default class Admin extends React.Component<AdminProps, any> {
    renderHeader() {
        const store = this.props.store;

        return (
            <div>
                <div className={`cxd-Layout-brandBar`}>
                    <button
                        onClick={store.toggleOffScreen}
                        className="pull-right visible-xs"
                    >
                        <i className="fa fa-bars text-white"></i>
                    </button>
                    <div className={`cxd-Layout-brand`}>
                        <i className="fa fa-paw"></i>
                        <span className="hidden-folded m-l-sm">react-amis-admin</span>
                    </div>
                </div>
                <div className={`cxd-Layout-headerBar`}>
                    <div className="nav navbar-nav hidden-xs pull-left">
                        <Button
                            level="link"
                            className="no-shadow navbar-btn"
                            onClick={store.toggleAsideFolded}
                            tooltip="展开或收起侧边栏"
                            placement="bottom"
                            iconOnly
                        >
                            <i className={store.asideFolded ? 'fa fa-indent' : 'fa fa-outdent'}/>
                        </Button>
                    </div>

                    <div className="m-l-auto hidden-xs pull-right">
                        <span>{store.user.name}</span><span className={'btn btn-link'} onClick={this.logout}>[退出]</span>
                    </div>
                </div>


            </div>
        );
    }

    state = {
        pathname: '',
        hasLoadMenu: false,
        navigations: []
    }

    logout = () => {
        const store = this.props.store;
        store.user.logout()
        const history = this.props.history;
        history.replace(`/login`)
    }

    componentDidMount() {
        const store = this.props.store;
        const history = this.props.history;
        console.log("componentDidMount, store.user:", store.user)
        if (!store.user.isAuthenticated) {
            toast['error']('用户未登陆，请先登陆！', '消息')
            history.replace(`/login`)
        }
        this.refreshMenu()
    }

    componentDidUpdate() {
        this.refreshMenu()
    }

    refreshMenu = () => {
        const store = this.props.store;
        let pathname = this.props.location.pathname;
        console.log("location:", pathname)
        console.log("store.user:", store.user)
        if (pathname != 'login' && pathname != '/' &&
            !this.state.hasLoadMenu &&
            store.user.isAuthenticated
        ) {
            request({
                method: "get",
                url: '/api/menus'
            }).then((res: any) => {
                console.log("res:", res);
                this.setState({
                        "navigations": res.data.data,
                        "hasLoadMenu": true
                    }
                )
            })
        }
    }


    renderAside() {
        const location = this.props.location;
        const store = this.props.store;

        return (
            <AsideNav
                key={store.asideFolded ? 'folded-aside' : 'aside'}
                navigations={this.state.navigations}
                renderLink={({link, toggleExpand, classnames: cx, depth}: any) => {
                    if (link.hidden) {
                        return null;
                    }
                    let children = [];

                    if (link.children) {
                        children.push(
                            <span
                                key="expand-toggle"
                                className={cx('AsideNav-itemArrow')}
                                onClick={(e) => toggleExpand(link, e)}
                            ></span>
                        );
                    }

                    link.badge && children.push(
                        <b key="badge"
                           className={cx(`AsideNav-itemBadge`, link.badgeClassName || 'bg-info')}>{link.badge}</b>
                    );

                    if (link.icon) {
                        children.push(
                            <i key="icon" className={cx(`AsideNav-itemIcon`, link.icon)}/>
                        )
                    } else if (store.asideFolded && depth === 1) {
                        children.push(
                            <i key="icon"
                               className={cx(`AsideNav-itemIcon`, link.children ? 'fa fa-folder' : 'fa fa-info')}/>
                        )
                    }
                    ;

                    children.push(
                        <span key="label" className={cx('AsideNav-itemLabel')}>{link.label}</span>
                    );

                    return link.path
                        ? (link.active ? <a>{children}</a> : <Link
                            to={link.path}>{children}</Link>)
                        : (
                            <a onClick={link.onClick ? link.onClick : link.children ? () => toggleExpand(link) : undefined}>{children}</a>);
                }}

                isActive={(link: any) => isActive(link.path, location)}
            />
        );
    }


    render() {
        const store = this.props.store;
        let pathname = this.props.location.pathname;
        console.log("location:", pathname)
        if (pathname == 'login' || pathname == '/') {
            return (
                <Switch>
                    <RouterGuard/>
                    <Redirect to={`/404`}/>
                </Switch>
            )
        } else {
            return (
                <Layout
                    aside={this.renderAside()}
                    header={this.renderHeader()}
                    folded={store.asideFolded}
                    offScreen={store.offScreen}
                >
                    <Switch>
                        <RouterGuard/>
                        <Redirect to={`/404`}/>
                    </Switch>
                </Layout>
            );
        }

    }
}