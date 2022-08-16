import schema2component from "@/utils/schema2component";
import { Modal } from "amis-ui/lib/components/Modal";

var myStatus=1;

let dialog1 = {
  label: "弹框1",
  type: "button",
  actionType: "dialog",
  dialog: {
    title: "弹框1",
    body: "这是个简单的弹框1。",
  },
};

function abc() {
  console.log(myStatus);
  if(myStatus==1) {
    return dialog1;
  }
  return dialog2;
}

let dialog2 = {
  label: "弹框2",
  type: "button",
  actionType: "dialog",
  dialog: {
    title: "弹框2",
    body: "这是个简单的弹框2。",
  },
};

const schema = {
  type: "page",
  title: "Dialog",
  body: [
    {
      type: "button",
      label: "Feedback2",
      actionType: "ajax",
      api: {
        method: "GET",
        url: "/api/mock2/form/initData",
        adaptor: function (payload: any, response: any) {
          myStatus = 2;
          return { ...payload };
        },
      },
      feedback: {
        title: "操作成功",
        body: abc(),
      },
    },
  ],
};

export default schema2component(schema);
