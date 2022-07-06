import schema2component from "@/utils/schema2component";

const schema = {
  type: 'service',
  schemaApi: {
    "method": "get",
    "url": "/api/schemaApi/demo1"
  }
}

export default schema2component(schema);