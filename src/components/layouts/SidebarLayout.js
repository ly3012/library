import Nav from './nav';
import Sider from './sider';
import BookList from '../content/book';
import Reader from '../content/reader';
import Dashboard from '../content/dashboard'
import Admin from '../content/admin';
import CallCard from '../content/callCard'
// import AddBook from './components/form/addBook';
import React, { useCallback, useState } from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SidebarLayout() {
  const [openSider, setOpenSider] = useState(true);
  const updateOpenSider = (openSider) =>{
      setOpenSider(!openSider);
  }

  return (
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
              <Admin
               openSider={openSider}
               />
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

export default SidebarLayout;
