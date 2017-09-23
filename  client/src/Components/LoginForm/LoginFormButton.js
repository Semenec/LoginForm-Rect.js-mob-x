import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("LoginFormStore")
@observer

class LoginFormButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.LoginFormStore.getLogin()} className="LoginFormButton">Login</button>
      </div>
    )
  }
}

export default LoginFormButton
