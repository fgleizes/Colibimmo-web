import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/utilities/Header';
import HomeView from './components/views/HomeView';
import BuyView from './components/views/BuyView';
import RentView from './components/views/RentView';
import EstimateView from './components/views/EstimateView';
import LoginViews from './components/views/LoginView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Switch>
        <Route path="/accueil">
          <HomeView />
        </Route>
        <Route path="/acheter">
          <BuyView />
        </Route>
        <Route path="/louer">
          <RentView />
        </Route>
        <Route path="/estimer-un-bien">
          <EstimateView />
        </Route>
        <Route path="/login">
          <LoginViews />
        </Route>
        <Route path="/maSelection">
          {/* <LoginForm /> */}
        </Route>
        <Route path="/">
          <Redirect to="/accueil" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
