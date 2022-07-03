## 如何新增一个Amis页面？
通过`Amis`只需要写`JSON`(或者根据拖拽生成的`JSON`)即可完成开发一个页面，极大减轻了后台页面前端工作量。

### 1、首先在pages下新增一个Hello.tsx页面

其中`schema`即amis的JSON代码，具体可以参考 [官方文档](https://baidu.github.io/amis/zh-CN/components/page)

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
