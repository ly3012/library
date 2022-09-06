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


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [openSider, setOpenSider] = useState(true);
  const updateOpenSider = (openSider) =>{
      setOpenSider(!openSider);
  }

  return (
    // <Login/>
    <Router>
      <div className='App flex-col '>
        <Nav />
        <div className={`flex justify-between `}>
          <Sider 
            openSider={openSider}
            updateOpenSider = {updateOpenSider}
            />
          <Switch>
            <Route path="/" exact>
              <Dashboard/>
            </Route>
            <Route path="/book" exact>
              <BookList
              openSider={openSider}
              />
            </Route>
            <Route path="/reader" exact>
              <Reader 
              openSider={openSider}
              />
            </Route>
            <Route path="/callCard" exact>
              <CallCard
              openSider={openSider}
              />
            </Route>
            <Route path="/admin" exact>
              <Admin />
            </Route>
            {/* <Route path="/book/add" exact>
              <AddBook/>
            </Route> */}
          </Switch>
        </div>
        {/* <Footer/> */}
      </div>
    </Router >

  );
}

export default App;
