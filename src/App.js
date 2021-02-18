import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login.js';
import {TodoApp} from "./components/TodoApp.js";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {


    constructor(props) {
        super(props);
        localStorage.setItem('email',"davidandres@gmail.com");
        localStorage.setItem('password',"123456");
    }

    render() {

        const LoginView = () => (
            <Login/>
        );

        const TodoAppView = () => (
            <TodoApp/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('IsLoggedIn') === "true"?
                        <li><Link to="/todo">Todo</Link></li> : <li><Link to="/">Login</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('IsLoggedIn') === "true"?
                            <Route path="/todo" component={TodoAppView}/> : <Route exact path="/" component={LoginView}/>}
                    </div>
                </div>
            </Router>
        );
    }



}

export default App;
