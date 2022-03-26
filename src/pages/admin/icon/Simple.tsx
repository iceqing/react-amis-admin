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
          icon: "user",
        },
        {
          type: "icon",
          icon: "user",
          "className": "text-info text-xl"
        },
        {
          type: "divider",
        },
        {
          type: "icon",
          icon: "cloud",
        },
        {
          type: "icon",
          icon: "cloud",
          "className": "text-info text-xl"
        }
      ],
    },
  ],
};

export default schema2component(schema);
