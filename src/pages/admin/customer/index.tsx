import schema2component from "../../../utils/schema2component";

const schema = {
    type: 'page',
    title: '会员列表',
    subTitle: '展示基本的增删改查',
    toolbar: [
    ],
    body: {
        type: "crud",
        api: "/api/customer",
        filter: {
            title: "",
            submitText: "",
            controls: [
                {
                    type: "text",
                    name: "keywords",
                    placeholder: "通过关键字搜索",
                    addOn: {
                        label: "搜索",
                        type: "submit"
                    }
                }
            ]
        },
        footerToolbar: ["switch-per-page", "statistics", "pagination"],
        columns: [
            {
                name: "id",
                label: "ID",
            },
            {
                name: "name",
                label: "姓名",
                "copyable": true
            },
            {
                name: "age",
                label: "年龄",
            },
            {
                name: "gender",
                label: "性别",
                type: 'mapping',
                map: {
                    1: '♂',
                    '*': '♀'
                }
            },
            {
                name: 'tel',
                label: '电话'
            },
            {
                name: 'company',
                label: '所属公司'
            },
            {
                type: "operation",
                label: "操作",
                width: 100,
                buttons: [
                    {
                        type: "button",
                        icon: "fa fa-eye",
                        "actionType": "dialog",
                        dialog: {
                            "title": "查看详情",
                            "type": "form",
                            "controls": [
                                {
                                    name: "id",
                                    "type": "text",
                                    label: "ID",
                                },
                                {
                                    name: "name",
                                    "type": "text",
                                    label: "姓名",
                                },
                                {
                                    name: "age",
                                    "type": "text",
                                    label: "年龄",
                                },
                                {
                                    name: "gender",
                                    label: "性别",
                                    type: 'mapping',
                                    map: {
                                        1: '♂',
                                        '*': '♀'
                                    }
                                },
                                {
                                    name: 'tel',
                                    "type": "text",
                                    label: '电话'
                                },
                                {
                                    name: 'company',
                                    "type": "text",
                                    label: '所属公司'
                                }
                            ]
                        }
                    },
                    {
                        type: "button",
                        icon: "fa fa-times text-danger",
                        actionType: "ajax",
                        tooltip: "删除",
                        confirmText: "您确认要删除?",
                        api: "delete:/api/sample/$id"
                    }
                ],
                toggled: true
            }
        ]
    }
};

export default schema2component(schema);