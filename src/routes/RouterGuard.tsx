import * as React from "react";
import {Route} from "react-router-dom";
import path2components from "@/routes/path2Compoment";

import {
    NotFound,Spinner
} from 'amis';

export default class RouterGuard extends React.Component<any, any> {
    componentDidMount() {
        this.refreshRoute()
    }

    state = {
        pathname: '',
        component: Spinner,
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.refreshRoute()
    }

    refreshRoute = () => {
        const pathname = this.props.location.pathname;
        console.log("pathname is ", pathname)
        if (this.state.pathname != pathname) {
            this.setState({'pathname': pathname});
            let path2ComponentItem = path2components.find(v => {
                let path = v.path;
                if (path != null && !path.startsWith('/')) {
                    path = '/' + path;
                }
                return path === pathname;
            });

            if (path2ComponentItem != null && path2ComponentItem.component != null) {
                this.setState({'component': path2ComponentItem.component});
            } else {
                this.setState({'component': NotFound});
            }
        }
    }


    render() {
        return (
            <Route
                path={this.state.pathname}
                component={this.state.component}
                exact
            />);
    }
}