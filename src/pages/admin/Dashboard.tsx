import schema2component from "../../utils/schema2component";


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
                        "title": "项目源码1",
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
                    "body": "https://baidu.github.io/amis/zh-CN/docs/index"
                }
            ]
        },
        {
            "type": "grid",
            "className": "m-t-lg",
            "columns": [
                {
                    "type": "chart",
                    "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/chart/chartData",
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
                    "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/chart/chart2?name=$name"
                },
            ]
        },
        {
            "type": "grid",
            "className": "m-t-lg",
            "columns": [
                {
                    "type": "chart",
                    "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/chart/chart",
                },
                {
                    "type": "chart",
                    "config": {
                        "legend": {
                            "formatter": "function (name) { return 'Legend ' + name;}"
                        },
                        "dataset": {
                            "source": [
                                [
                                    "type",
                                    "2012",
                                    "2013",
                                    "2014",
                                    "2015",
                                    "2016"
                                ],
                                [
                                    "Forest",
                                    320,
                                    332,
                                    301,
                                    334,
                                    390
                                ],
                                [
                                    "Steppe",
                                    220,
                                    182,
                                    191,
                                    234,
                                    290
                                ],
                                [
                                    "Desert",
                                    150,
                                    232,
                                    201,
                                    154,
                                    190
                                ],
                                [
                                    "Wetland",
                                    98,
                                    77,
                                    101,
                                    99,
                                    40
                                ]
                            ]
                        },
                        "xAxis": {
                            "type": "category",
                            "axisTick": {
                                "show": false
                            }
                        },
                        "yAxis": {},
                        "series": [
                            {
                                "type": "bar",
                                "seriesLayoutBy": "row"
                            },
                            {
                                "type": "bar",
                                "seriesLayoutBy": "row"
                            },
                            {
                                "type": "bar",
                                "seriesLayoutBy": "row"
                            },
                            {
                                "type": "bar",
                                "seriesLayoutBy": "row"
                            }
                        ]
                    }
                },
            ]
        },
    ]
};

export default schema2component(schema);