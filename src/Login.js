import React, { Component, Fragment } from 'react';
import { BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import BoardForm from './App_BoardForm';
import Test from './Test_App'
  
class Login extends Component {


    render() {
        return (
    <Fragment>
        <Router>
        <Link to='/Test_App'>
            <button>이동</button>
        </Link>
        <Switch>
            <Route path="/Test_App" component={Test}/>
        </Switch>

        </Router>
    </Fragment>
        );
    }
}
 
export default Login;