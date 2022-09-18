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
import Logintest from './components/form/logintest'
import React, { useCallback, useState } from "react";
import SidebarLayout from './components/layouts/SidebarLayout';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/form/login';

function App() {
  const [openSider, setOpenSider] = useState(true);
  const updateOpenSider = (openSider) => {
    setOpenSider(!openSider);
  }

  const [userLogin, setUserLogin] = useState({
    // const userLogin = ({
    name: "",
    username: "",
    email: "",
    phoneNumber: ""
  })

  const updateUserLogin = (name, username, email, phoneNumber) => {
    userLogin.name = name;
    userLogin.username = username;
    userLogin.email = email;
    userLogin.phoneNumber = phoneNumber;
  }
  return (
    // <Router>
    //   <Switch>
    //     <div className="App">
    //       <Route path={["/login","/"]} exact>
    //       {/* <Route path={["/login"]} exact> */}
    //         <Logintest />
    //       </Route>
    //       <Route path={["/home", "/book", "/reader", "/admin","/dashboard" ]} exact>
    //       {/* <Route path={["/"]} exact> */}
    //         <SidebarLayout/>
    //       </Route>
    //     </div>
    //   </Switch>
    // </Router>
    <Router>
      <Route path={["/login", "/"]} exact>
        <Login
          userLogin={userLogin}
          setUserLogin={updateUserLogin}
        />
      </Route>
      <Route path="/dashboard" exact >
        {/* <Router.RouteHandler {...this.props}/> */}
        <div className='App flex-col '>
          <Nav
            userLogin={userLogin}
            setUserLogin={setUserLogin}
          />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
              userLogin={userLogin.name}
            />
            <Dashboard userLogin={userLogin} />
          </div>
        </div>

      </Route>

      <Route path="/book" exact>
        <div className='App flex-col '>
          <Nav 
          userLogin={userLogin}
          setUserLogin={updateUserLogin}
          />
          <div className={`flex justify-between `}>
            <Sider
             userLogin={userLogin}
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <BookList
            
              openSider={openSider}
            />
          </div>
        </div>

      </Route>
      <Route path="/reader" exact>
        <div className='App flex-col '>
          <Nav />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <Reader
              openSider={openSider}
            />
          </div>
        </div>

      </Route>
      <Route path="/callCard" exact>
        <div className='App flex-col '>
          <Nav />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <CallCard
              openSider={openSider}
            />
          </div>
        </div>

      </Route>
      <Route path="/admin" exact>
        <div className='App flex-col '>
          <Nav />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <Admin
              openSider={openSider}
            />
          </div>
        </div>

      </Route>
    </Router>
  );
}

export default App;
