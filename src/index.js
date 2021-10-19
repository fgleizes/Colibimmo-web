import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import BuyView from './components/views/BuyView';
import Header from './components/utilities/Header';
import HomeView from './components/views/HomeView';
import RentView from './components/views/RentView';
import LoginView from './components/views/LoginView';
import ProfileView from './components/views/ProfileView';
import RegisterView from './components/views/RegisterView';
import EstimateView from './components/views/EstimateView';
import { UserContextProvider } from "./user-context"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <HomeView />
          </Route>
          <Route path="/buy">
            <BuyView />
          </Route>
          <Route path="/profile">
            <ProfileView/>
          </Route>
          <Route path="/rent">
            <RentView />
          </Route>
          <Route path="/estimate">
            <EstimateView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/mySelection"></Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
