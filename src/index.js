import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/utilities/Header';
import HomeView from './components/views/HomeView';
import BuyView from './components/views/BuyView';
import RentView from './components/views/RentView';
import EstimateView from './components/views/EstimateView';
import LoginView from './components/views/LoginView';
import RegisterView from './components/views/RegisterView'
import PropertyView from './components/views/PropertyView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const UserContext = React.createContext('user');
console.log(UserContext)

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value="dark">
      <Router>
        <Header />

        <Switch>
          <Route path="/home">
            <HomeView />
          </Route>
          <Route path="/buy">
            <BuyView />
          </Route>
          <Route path="/rent">
            <RentView />
          </Route>
          <Route path="/estimate">
            <EstimateView />
          </Route>
          <Route path="/voir un bien">
            <PropertyView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/my-selection">
            {/* <LoginForm /> */}
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
