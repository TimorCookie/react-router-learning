import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "./my-react-router-dom";

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage'
import _404Page from './pages/_404Page';
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route path='/product/:id' component={ProductPage}/>
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
