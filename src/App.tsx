import * as React from 'react';
import { Provider } from "mobx-react";
import RootRoute from './routes';
import './utils/polyfill';
import appStore from "@/stores/appStore"
import "moment/dist/locale/zh-cn";
// css
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'amis/sdk/iconfont.css';
import 'amis-ui/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import './scss/style.scss';
import { createRoot } from 'react-dom/client';

export default function():JSX.Element {
    return (
        <Provider store={appStore.mainStore}>
            <RootRoute store={appStore.mainStore} />
        </Provider>
    );
}