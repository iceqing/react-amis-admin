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
          icon: "user"
        }
      ],
    },
  ],
};

export default schema2component(schema);
