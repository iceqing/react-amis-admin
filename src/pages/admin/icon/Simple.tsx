import schema2component from "@/utils/schema2component";
import './Demo';

const schema = {
  type: "page",
  title: "Dialog",
  body: [
    {
      type: "panel",
      title: "常见示例图标",
      body: [
        {
          "type": "card",
          "href": "https://fontawesome.com/v6/search?o=r&m=free",
          "header": {
            "title": "FontAwesome",
            "subTitle": "",
            "description": "点击搜索所有免费图标",
            "avatarText": ""
          },
          "body": "https://fontawesome.com/v6/search?o=r&m=free"
        },
        {
          type: "icon",
          icon: "user",
        },
        {
          type: "icon",
          icon: "user",
          "className": "text-info text-xl"
        },
        {
          type: "divider",
        },
        {
          type: "icon",
          icon: "cloud",
        },
        {
          type: "icon",
          icon: "cloud",
          "className": "text-info text-xl"
        },
        {
          type: "divider",
        },
        {
          "type": "icon",
          "icon": "far fa-address-book",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "fas fa-address-book",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "far fa-address-book",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "icon",
          "icon": "fas fa-address-book",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "icon",
          "icon": "far fa-bell",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "fas fa-bell",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "far fa-bell",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "icon",
          "icon": "fas fa-bell",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "icon",
          "icon": "far fa-plus",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "fas fa-plus",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "far fa-plus",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "icon",
          "icon": "fas fa-plus",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "icon",
          "icon": "far fa-question-circle",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "fas fa-question-circle",
          "vendor": ""
        },
        {
          "type": "icon",
          "icon": "far fa-question-circle",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "icon",
          "icon": "fas fa-question-circle",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "icon",
          "icon": "fa fa-bars",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "icon",
          "icon": "fa fa-home",
          "vendor": "",
        },
        {
          "type": "icon",
          "icon": "fa fa-dashboard",
          "vendor": "",
        },
        {
          "type": "icon",
          "icon": "fa fa-edit",
          "vendor": "",
        },
        {
          "type": "icon",
          "icon": "fa fa-home",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "icon",
          "icon": "fa fa-th",
          "vendor": "",
        },
        {
          "type": "icon",
          "icon": "fa fa-th",
          "vendor": "",
          "className": "text-info text-xl"
        },
        {
          "type": "divider"
        },
        {
          "type": "text",
          "value": "自定义图标"
        },
        {
          type: "icon",
          icon: "custom-icon-1",
          // 设置图标长度和宽度
          "className": "w-7 h-7"
        },
      ],
    },
  ],
};

export default schema2component(schema);
