# react-amis-admin

> 本仓库主要目的在于提供一个开箱可用的`Amis` + `React` 低代码开发环境。支持Amis低代码,
> 同时支持React原生方式开发或者可选支持`Antd`等组件来定制复杂页面，本工程不包含后端代码，前后端分离。


项目源码：https://github.com/iceqing/react-amis-admin

演示网站：https://amis.iceq.cc

## 使用方法
```
npm i
npm start
```
即可访问页面

## 如何新增一个Amis页面？
通过`Amis`只需要写`JSON`(或者根据拖拽生成的`JSON`)即可完成开发一个页面，极大减轻了后台页面前端工作量。

### 1、首先在pages下新增一个Hello.tsx页面
```tsx
import schema2component from "@/utils/schema2component";

const schema = {
    "type": "page",
    "title": "hello",
    "body": {
        "label": "弹框",
        "type": "button",
        "actionType": "dialog",
        "dialog": {
            "title": "弹框",
            "body": "这是个简单的弹框。"
        }
    }
}

export default schema2component(schema);
```

### 2、增加路由配置
在`path2Compoment`文件导入Hello组件
```tsx
import Hello from "@/pages/Hello";
```

然后在path2components对象增加路由
```
{
        path: '/hello',
        component: Hello
}
```

### 3、启动项目，测试即可
通过`npm start`,然后输入
[http://localhost:8080/hello](http://localhost:8080/hello)即可访问刚刚新建的页面


## Amis文档

`Amis`官方文档： https://baidu.github.io/amis/zh-CN/docs/index

`Amis`官方可视化编辑器： https://aisuda.github.io/amis-editor-demo/#/hello-world

## 参考

本仓库灵感来自于以下几个仓库：

https://github.com/baidu/amis

https://github.com/aisuda/amis-admin

https://github.com/aisuda/amis-react-starter

https://github.com/PanJiaChen/vue-element-admin

https://baidu.gitee.io/amis/examples/index

## 其他

图标网站：
https://fontawesome.com/v5.15/icons?d=listing&p=2&s=solid&m=free