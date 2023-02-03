import * as React from 'react';
import { Provider } from "mobx-react";
import {
    toast,
    alert,
    confirm
} from 'amis';
import axios from 'axios';
import { MainStore } from './stores';
import copy from 'copy-to-clipboard';
import RootRoute from './routes';
import './utils/polyfill';
import {request} from './utils/requestInterceptor';

import "moment/dist/locale/zh-cn";
// css
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'amis/sdk/iconfont.css';
import 'amis-ui/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import './scss/style.scss';

export default function():JSX.Element {
    const store = (window as any).store = MainStore.create({}, {
        fetcher: ({
            url,
            method,
            data,
            config,
            headers
        }: any) => {
            config = config || {};
            config.headers = config.headers || {};
            config.withCredentials = true;

            if (config.cancelExecutor) {
                config.cancelToken = new axios.CancelToken(config.cancelExecutor);
            }

            config.headers = headers || {};
            config.method = method;

            if (method === 'get' && data) {
                config.params = data;
            } else if (data && data instanceof FormData) {
                // config.headers = config.headers || {};
                // config.headers['Content-Type'] = 'multipart/form-data';
            } else if (data
                && typeof data !== 'string'
                && !(data instanceof Blob)
                && !(data instanceof ArrayBuffer)
            ) {
                data = JSON.stringify(data);
                // config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
            }

            data && (config.data = data);
            config.url = url;
            return request(config);
        },
        isCancel: (e:any) => axios.isCancel(e),
        notify: (type: 'success' | 'error' | 'info', msg: string) => {
            toast[type] ? toast[type](msg,
                {title:type === 'error' ? '系统错误' : '系统消息', timeout:5000}) : console.warn('[Notify]', type, msg);
            console.log('[notify]', type, msg);
        },
        alert,
        confirm,
        copy: (contents: string, options: any = {}) => {
            const ret = copy(contents, options);
            ret && (!options || options.shutup !== true) && toast.info('内容已拷贝到剪切板');
            return ret;
        }
    });

    return (
        <Provider store={store}>
            <RootRoute store={store} />
        </Provider>
    );
}