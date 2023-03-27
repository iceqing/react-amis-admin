import schema2component from "@/utils/schema2component";
import "./CustomRenderer";

const schema = {
  type: "page",
  body: [
    {
      type: "service",
      id: "my_schema",
      name: "my_schema",
      schemaApi: {
        method: "get",
        url: "/api/schemaApi/demo1",
        requestAdaptor: function (api) {
          let key = window.location.pathname;
          return {
            ...api,
            data: {
              ...api.data,
              schemaKey: key,
            },
          };
        },
      },
    },
  ],
};

export default schema2component(schema);
