import * as React from 'react';
import {
    ToastComponent,
    AlertComponent,
} from 'amis';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { observer } from 'mobx-react';
import { IMainStore } from '../stores';
import Login from './Login';
import Register from './Register';
import AdminRoute from './admin';
import NotFound from './404';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';


export default observer(function({store}:{
    store:IMainStore
}) {
    return (
        <Router>
            <div className="routes-wrapper">
                <ToastComponent key="toast" position={'top-right'} theme={store.theme} />
                <AlertComponent key="alert" theme={store.theme} />
                <Switch>
                    <Route path={`/login`} exact component={Login} />
                    <Route path={`/register`} exact component={Register} />
                    
                    {store.user.isAuthenticated ? (
                        <Route path={''} component={AdminRoute} />
                    ) : (
                        <Route path="*" exact component={Login} />
                    )}

                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
});