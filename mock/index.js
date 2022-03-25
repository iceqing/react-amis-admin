module.exports = {
    '/api/login': {
        status: 0,
        msg: '登录成功'
    },
    '/api/form/save': {
        status: 0,
        msg: ''
    },
    '/api/menus': {
        status: 0,
        data: [
            {
                label: '导航',
                children: [
                    {
                        path: '/dashboard',
                        label: 'Dashboard',
                        icon: 'glyphicon glyphicon-signal',
                    },
                    {
                        path: '/dialog/simple',
                        label: 'Dialog',
                        icon: 'glyphicon glyphicon-signal',
                    },
                    {
                        label: '表单页面',
                        icon: 'glyphicon glyphicon-edit',
                        children: [
                            {
                                label: '常规表单',
                                path: '/form/basic',
                                children: [
                                    {
                                        label: '三级目录测试',
                                        path: '/form/basic/advanced',
                                    }
                                ]
                            },

                            {
                                label: '复杂表单',
                                path: '/form/advanced',
                            },

                            {
                                label: '向导',
                                path: '/form/wizard',
                            },

                            {
                                label: '代码编辑器',
                                path: '/form/editor',
                            }
                        ]
                    },
                    {
                        label: '会员管理',
                        children: [
                            {
                                label: '列表',
                                path: '/customer/index',
                            }
                        ]
                    }
                ]
            }
        ]
    }
}