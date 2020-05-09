import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login'
import './App.css';

class App extends Component{  

  state = {
    usuario : {
      email: '',
      senha: ''
    }
  }


  render() {
    return (
      <Fragment>
        <div className="body-login">
          <Login usuario = { this.state.usuario }/>
       </div>
      </Fragment>

    );
  }
}
export default App;
