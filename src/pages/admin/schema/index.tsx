import schema2component from "@/utils/schema2component";
import React from "react";
import JsonConsole from "./JsonConsole";
import MyComponent from "./MyComponent";
import "./CustomRenderer";

const schema = {
  type: "page",
  body: [
    {
      type: "button",
      label: "编辑器",
      actionType: "drawer",
      drawer: {
        position: "right",
        overlay: false,
        resizable: true,
        closeOnOutside: true,
        title: "支持amis语法提示",
        actions: [
          {
            type: "button",
            label: "预览",
            actionType: "confirm",
            onEvent: {
              click: {
                actions: [
                  {
                    actionType: "reload",
                    componentId: "my_schema",
                  },
                ],
              },
            },
          },
        ],
        body: [
          {
            type: "my-editor",
            onEvent: {
              change: {
                actions: [
                  {
                    actionType: "reload",
                    componentId: "my_schema",
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      type: "service",
      id: "my_schema",
      name: "my_schema",
      schemaApi: {
        method: "get",
        // 这里的schemaKey为url中的查询参数，可以根据需要自行定义
        url: "/api/schemaApi/demo1",
        requestAdaptor: function (api) {
          let key = window.location.pathname;
          return {
            ...api,
            data: {
              ...api.data,
              schemaKey: key,
            },
          };
        },
        adaptor: (payload, response) => {
          console.log("payload=", payload);
          // 判断是否有临时的对象，如果有以临时对象为主
          let key = window.location.pathname;

          let data = localStorage.getItem(key);

          let dataJson;
          try {
            if (data != null) {
              dataJson = JSON.parse(data);
              console.log("local data= ", dataJson);
            }
          } catch (e) {
            console.error(e);
          }

          if (dataJson != null) {
            return {
              data: dataJson,
              status: 0,
            };
          } else {
            return {
              ...payload,
            };
          }
        },
      },
    },
  ],
};

export default schema2component(schema);
