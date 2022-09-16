import './App.css';
// import "antd/dist/antd.min.css";
// import Layout from './components/layouts/layout'
import Nav from './components/layouts/nav';
import Content1 from './components/content/content1';
import Sider from './components/layouts/sider';
import BookList from './components/content/book';
import Reader from './components/content/reader';
import Dashboard from './components/content/dashboard'
import Footer from './components/layouts/footer';
import Admin from './components/content/admin';
import CallCard from './components/content/callCard'
import AddBook from './components/form/addBook';
import Login from './components/form/login'
import React, { useCallback, useState } from "react";
import SidebarLayout from './components/layouts/SidebarLayout';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [openSider, setOpenSider] = useState(true);
  const updateOpenSider = (openSider) => {
    setOpenSider(!openSider);
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path={["/login","/"]} exact>
          {/* <Route path={["/login"]} exact> */}
            <Login />
          </Route>
          <Route path={["/home", "/book", "/reader", "/admin","/dashboard" ]} exact>
          {/* <Route path={["/"]} exact> */}
            <SidebarLayout/>
          </Route>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
