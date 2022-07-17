import schema2component from "@/utils/schema2component";

const schema = {
  type: 'service',
  schemaApi: {
    "method": "get",
    // 这里的schemaKey为url中的查询参数，可以根据需要自行定义
    "url": "/api/schemaApi/demo1?schemaKey=${schemaKey}"
  }
}

export default schema2component(schema);