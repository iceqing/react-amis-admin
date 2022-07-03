import * as React from 'react';
import axios from "axios";
import {
  toast,
} from 'amis';
import {RouteComponentProps} from "react-router-dom";
import {IMainStore} from "@/stores";
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router";

interface LoginProps extends RouteComponentProps<any> {
  store: IMainStore;
}

@inject("store")
// @ts-ignore
@withRouter
@observer
export default class LoginRoute extends React.Component<LoginProps, any> {

  state = {
    inputUsername: 'admin',
    inputPassword: 'admin'
  }

  handleFormSaved = (value: any) => {
    const history = this.props.history;
    const store = this.props.store;
    console.log("inputUsername:", this.state.inputUsername)
    console.log("inputPassword:", this.state.inputPassword)
    // 这里可以进行登陆密码验证
    axios.request({
      method: "post",
      url: "/api/login"
    }).then(res => {
      console.log("login res", res);
      if (res.data != null && res.data.status === 0) {
        store.user.login(this.state.inputUsername);
        toast['info']('登陆成功', '消息')
        // 跳转到dashboard页面
        console.log("replace history to dashboard, value:", value)
        history.replace(`/dashboard`)
      } else {
        toast['error']('登陆失败', '消息')
      }
    })
  }

  handleChangeForPassword = (e: any) => {
    this.setState({
      inputPassword: e.target.value
    })
  }

  componentDidMount() {
    const store = this.props.store;
    console.log("store.user.name", store.user.name)
    console.log("store.user.isAuthenticated", store.user.isAuthenticated)
  }

  handleChangeForUsername = (e: any) => {
    this.setState({
      inputUsername: e.target.value
    })
  }

  render() {
    return (
        <div className="login-page-container" >

          <div className="container mt-5">
            <span className="block m-b-xl text-center text-2x">React-Amis-Admin系统</span>
            <span className="block m-b-xl text-center">一个开箱可用的Amis + React 低代码开发环境</span>

            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <div className="card px-5 py-5 bg-glass">

                  <div className="card-body">
                    <div className="form-data">
                      <div className="forms-inputs mb-4"><span>用户名</span>
                        <input autoComplete="off"
                               className="form-control"
                               placeholder="用户名"
                               type="text"
                               onChange={this.handleChangeForUsername}
                               defaultValue={this.state.inputUsername}
                        />
                        <div className="invalid-feedback">A valid email is required!</div>
                      </div>
                      <div className="forms-inputs mb-4"><span>密码</span>
                        <input placeholder="密码"
                               type="password"
                               className="form-control"
                               onChange={this.handleChangeForPassword}
                               defaultValue={this.state.inputPassword}/>
                        <div className="invalid-feedback">Password must be 8 character!</div>
                      </div>
                      <div className="mb-3">
                        <button className="btn btn-dark w-100" onClick={this.handleFormSaved}>登陆</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    )
        ;
  }
}