import schema2component from "@/utils/schema2component";


const schema = {
    type: 'page',
    title: 'Dashboard',
    body: [
        {
            "type": "grid",
            "className": "m-t-lg",
            "columns": [
                {
                    "type": "card",
                    "name": "browser",
                    "header": {
                        "title": "GitHub 源码",
                    },
                    
                    href: "https://github.com/iceqing/react-amis-admin",
                    "body": "https://github.com/iceqing/react-amis-admin"
                },
                {
                    "type": "card",
                    "name": "browser",
                    href: "https://amis.iceq.cc/",
                    "header": {
                        "title": "项目演示地址",
                    },
                    "body": "https://amis.iceq.cc/"
                },
                {
                    "type": "card",
                    "name": "browser",
                    href: "https://baidu.github.io/amis/zh-CN/docs/index",
                    "header": {
                        "title": "Amis文档",
                    },
                    "body": "https://baidu.github.io/amis"
                },
                {
                    "type": "card",
                    "name": "browser",
                    href: "https://github.com/baidu/amis",
                    "header": {
                        "title": "Amis GitHub",
                    },
                    "body": "https://github.com/baidu/amis"
                }
            ]
        },
        {
            "type": "card",
            "name": "browser",
            "header": {
                "title": "",
            },
            body: {
                "type": "chart",
                "api" : "/api/line/simple",
                "interval": 5000
            },
        },
        {
            "type": "grid",
            "className": "m-t-lg",
            "columns": [
                {
                    "type": "chart",
                    "api": "/api/pie/simple",
                    "interval": 5000
                },
                {
                    "type": "chart",
                    "api": "/api/gauge/simple",
                    "interval": 5000
                },
                {
                    "type": "chart",
                    "api": "/api/chart/chart",
                    "interval": 5000
                }
            ]
        },
        {
            "type": "grid",
            "className": "m-t-lg",
            "columns": [
                {
                    "type": "chart",
                    "api": "/api/chart/chartData",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": "${line}",
                                "type": "line"
                            }
                        ]
                    }
                },
                {
                    "type": "chart",
                    "api": "/api/chart/chart2"
                },
            ]
        }
    ]
};

export default schema2component(schema);