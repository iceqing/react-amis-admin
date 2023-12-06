
import { makeAutoObservable } from "mobx"
import axios from "axios";
import {
    toast,
    alert,
    confirm
} from 'amis';
import {request} from '../utils/requestInterceptor';
import copy from 'copy-to-clipboard';
class MainStore {
    
    confirm=confirm;
    apiHost="";
    getModalContainer=null;
    theme = 'cxd';
    asideFixed = true;
    asideFolded = false;
    offScreen = false;

    constructor() {
        makeAutoObservable(this);
    }
    fetcher({
        url,
        method,
        data,
        config,
        headers
    }: any)  {
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
    }
    isCancel(e: any) {
        axios.isCancel(e)
    };
    notify(type: 'success' | 'error' | 'info', msg: string) {
        toast[type] ? toast[type](msg,
            {title:type === 'error' ? '系统错误' : '系统消息', timeout:5000}) : console.warn('[Notify]', type, msg);
        console.log('[notify]', type, msg);
    };
    alert=alert;
    copy(contents: string, options: any = {})  {
        const ret = copy(contents, options);
        ret && (!options || options.shutup !== true) && toast.info('内容已拷贝到剪切板');
        return ret;
    };
}

export { MainStore }