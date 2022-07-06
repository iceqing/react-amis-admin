module.exports = {
  "/api/login": {
    status: 0,
    msg: "登录成功",
  },
  "/api/form/save": {
    status: 0,
    msg: "",
  },
  "/api/schemaApi/demo1": {
    status: 0,
    msg: "",
    data: {
      "type": "page",
      "title": "这个是接口返回的amis JSON 生成的界面",
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
  },
  "/api/menus": {
    status: 0,
    data: [
      {
        label: "导航",
        children: [
          {
            path: "/dashboard",
            label: "Dashboard",
            icon: "fa fa-gauge",
          },
          {
            path: "/dialog/simple",
            label: "Dialog",
            icon: "fa fa-bomb",
          },
          {
            label: "会员管理",
            icon: "fa fa-user",
            children: [
              {
                label: "列表",
                path: "/customer/index",
              },
            ],
          },
          {
            label: "选项卡",
            icon: "fa fa-clone",
            children: [
              {
                label: "常规选项卡",
                path: "/tabs",
              },
            ],
          },
          {
            path: "/icon/simple",
            label: "Icon",
            icon: "fa fa-th",
          },
          {
            label: "SchemaApi",
            icon: "fa fa-th",
            children: [
              {
                path: "/schemaApi/demo1",
                label: "渲染接口amis",
                icon: "fa fa-th",
              }
            ]
          },
          {
            label: "表单页面",
            icon: "fas fa-pen-to-square",
            children: [
              {
                label: "常规表单",
                path: "/form/basic",
                children: [
                  {
                    label: "三级目录测试",
                    path: "/form/basic/advanced",
                  },
                ],
              },

              {
                label: "复杂表单",
                path: "/form/advanced",
              },

              {
                label: "向导",
                path: "/form/wizard",
              },

              {
                label: "代码编辑器",
                path: "/form/editor",
              },
            ],
          }
        ],
      },
    ],
  },
  "/api/customer": {
    status: 0,
    msg: "",
    data: {
      count: 12,
      rows: [
        {
          "id": "101",
          name: "张三",
          age: 20,
          gender: 1,
          tel: '130****0001',
          'company': 'Google'
        },
        {
          "id": "102",
          name: "王丽",
          age: 21,
          gender: 2,
          tel: '131****0002',
          'company': 'Baidu'
        },
        {
          "id": "103",
          name: "李四",
          age: 21,
          gender: 1,
          tel: '131****0003',
          'company': 'XXX'
        },
        {
          "id": "101",
          name: "张三",
          age: 20,
          gender: 1,
          tel: '130****0001',
          'company': 'Google'
        },
        {
          "id": "102",
          name: "王丽",
          age: 21,
          gender: 2,
          tel: '131****0002',
          'company': 'Baidu'
        },
        {
          "id": "103",
          name: "李四",
          age: 21,
          gender: 1,
          tel: '131****0003',
          'company': 'XXX'
        },
        {
          "id": "101",
          name: "张三",
          age: 20,
          gender: 1,
          tel: '130****0001',
          'company': 'Google'
        },
        {
          "id": "102",
          name: "王丽",
          age: 21,
          gender: 2,
          tel: '131****0002',
          'company': 'Baidu'
        },
        {
          "id": "103",
          name: "李四",
          age: 21,
          gender: 1,
          tel: '131****0003',
          'company': 'XXX'
        },
        {
          "id": "101",
          name: "张三",
          age: 20,
          gender: 1,
          tel: '130****0001',
          'company': 'Google'
        },
        {
          "id": "102",
          name: "王丽",
          age: 21,
          gender: 2,
          tel: '131****0002',
          'company': 'Baidu'
        },
        {
          "id": "103",
          name: "李四",
          age: 21,
          gender: 1,
          tel: '131****0003',
          'company': 'XXX'
        }
      ]
    }
  },
};
