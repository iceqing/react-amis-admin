let age = 0;
module.exports = (req) => {
    console.log("req.query", req.query);
    return {
        "status": 0,
        "msg": "",
        "data": {
           "count": 12,
           "rows": [
              {
                 "id": "101",
                 "name": "张三",
                 "age": 20,
                 "gender": 1,
                 "tel": "130****0001",
                 "company": "Google"
              },
              {
                 "id": "102",
                 "name": "王丽",
                 "age": 21,
                 "gender": 2,
                 "tel": "131****0002",
                 "company": "Baidu"
              },
              {
                 "id": "103",
                 "name": "李四",
                 "age": 21,
                 "gender": 1,
                 "tel": "131****0003",
                 "company": "XXX"
              },
              {
                 "id": "101",
                 "name": "张三",
                 "age": 20,
                 "gender": 1,
                 "tel": "130****0001",
                 "company": "Google"
              },
              {
                 "id": "102",
                 "name": "王丽",
                 "age": 21,
                 "gender": 2,
                 "tel": "131****0002",
                 "company": "Baidu"
              },
              {
                 "id": "103",
                 "name": "李四",
                 "age": 21,
                 "gender": 1,
                 "tel": "131****0003",
                 "company": "XXX"
              },
              {
                 "id": "101",
                 "name": "张三",
                 "age": 20,
                 "gender": 1,
                 "tel": "130****0001",
                 "company": "Google"
              },
              {
                 "id": "102",
                 "name": "王丽",
                 "age": 21,
                 "gender": 2,
                 "tel": "131****0002",
                 "company": "Baidu"
              },
              {
                 "id": "103",
                 "name": "李四",
                 "age": 21,
                 "gender": 1,
                 "tel": "131****0003",
                 "company": "XXX"
              },
              {
                 "id": "101",
                 "name": "张三",
                 "age": 20,
                 "gender": 1,
                 "tel": "130****0001",
                 "company": "Google"
              },
              {
                 "id": "102",
                 "name": "王丽",
                 "age": 21,
                 "gender": 2,
                 "tel": "131****0002",
                 "company": "Baidu"
              },
              {
                 "id": "103",
                 "name": "李四",
                 "age": 21,
                 "gender": 1,
                 "tel": "131****0003",
                 "company": "XXX"
              }
           ]
        }
     }
}