import React from 'react';
import LoginForm from '../Components/LoginForm';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import LoginFormStore from '../Store/LoginFormStore';

useStrict(true);

const stores = { LoginFormStore }

const App = () => {
  return (
    <Provider { ...stores }>
      <LoginForm />
    </Provider>
  )
}

export default App;
