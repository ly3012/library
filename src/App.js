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
import { useHistory } from 'react-router-dom';
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
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
  let history = useHistory();



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
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </Route>
      <Route path="/dashboard" exact >
        {isLogin ? (<div className='App flex-col '>
          <Nav />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <Dashboard />
          </div>
        </div>
        ) : (<Redirect to='/login' />)}

      </Route>

      <Route path="/book" exact>
        {isLogin ? (<div className='App flex-col '>

          <Nav />
          <div className={`flex justify-between `}>
            <Sider
              openSider={openSider}
              updateOpenSider={updateOpenSider}
            />
            <BookList
              openSider={openSider}
            />
          </div>
        </div>
        ) : (<Redirect to='/login' />)}


      </Route>
      <Route path="/reader" exact>
        {isLogin ? (<div className='App flex-col '>

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
        ) : (<Redirect to='/login' />)}
      </Route>
      <Route path="/callCard" exact>
        {isLogin ? (<div className='App flex-col '>

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
        ) : (<Redirect to='/login' />)}
      </Route>
      <Route path="/admin" exact>
        {isLogin ? (<div className='App flex-col '>
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
        ) : (<Redirect to='/login' />)}
      </Route>
    </Router>
  );
}

export default App;
