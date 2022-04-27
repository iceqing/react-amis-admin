import schema2component from "@/utils/schema2component";

const schema = {
  type: "page",
  title: "Dialog",
  body: [
    {
      type: "panel",
      title: "常见示例图标",
      body: [
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
      ],
    },
  ],
};

export default schema2component(schema);
