import * as React from "react";
import axios from "axios";
import { toast } from "amis";
import { RouteComponentProps } from "react-router-dom";
import { IMainStore } from "@/stores";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Input, Button, Card } from "antd";
import appStore from "@/stores/appStore"
interface LoginProps extends RouteComponentProps<any> {
  store: IMainStore;
}

@inject("store")
// @ts-ignore
@withRouter
@observer
export default class LoginRoute extends React.Component<LoginProps, any> {
  state = {
    inputUsername: "admin",
    inputPassword: "admin",
  };

  handleFormSaved = (value: any) => {
    const history = this.props.history;
    const store = this.props.store;
    console.log("inputUsername:", this.state.inputUsername);
    // 这里可以进行登陆密码验证
    axios
      .request({
        method: "post",
        url: "/api/login",
      })
      .then((res) => {
        console.log("login res", res);
        if (res.data != null && res.data.status === 0) {
          appStore.userStore.login(this.state.inputUsername);
          toast.info("登陆成功", { timeout: "1400", position: "top-center" });
          // 跳转到dashboard页面
          console.log("replace history to dashboard, value:", value);
          history.replace(`/dashboard`);
        } else {
          toast["error"]("登陆失败", "消息");
        }
      });
  };

  handleChangeForPassword = (e: any) => {
    this.setState({
      inputPassword: e.target.value,
    });
  };

  componentDidMount() {
    console.log("appStore.userStore.name", appStore.userStore.name);
    console.log("store.user.isAuthenticated", appStore.userStore.isAuthenticated);
  }

  handleChangeForUsername = (e: any) => {
    this.setState({
      inputUsername: e.target.value,
    });
  };

  render() {
    return (
      <div className="login-page-container bg-gray-50">
        <div className="container mt-5">
          <span className="block m-b-xl text-center text-2x">
            React-Amis-Admin系统
          </span>
          <span className="block m-b-xl text-center">
            一个开箱可用的Amis + React 低代码开发环境
          </span>

          <div className="flex flex-row justify-center ">
            <div className="m-24">
            <Card className="p-8" >
            <div className="mb-3">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                  className="w-80"
                  size="large"
                  onChange={this.handleChangeForUsername}
                  defaultValue={this.state.inputUsername}
                ></Input>
              </div>

              <div className="mb-3 bg-glass">
                <Input
                  placeholder="密码"
                  size="large"
                  prefix={<KeyOutlined className="site-form-item-icon" />}
                  type="password"
                  className="w-80"
                  onChange={this.handleChangeForPassword}
                  defaultValue={this.state.inputPassword}
                ></Input>
              </div>

              <div className="mb-3 flex flex-row justify-center">
                <Button
                  type="primary"
                  size="large"
                  className="w-80"
                  onClick={this.handleFormSaved}
                >
                  登录
                </Button>
              </div>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
