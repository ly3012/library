import './App.css';
import "antd/dist/antd.min.css";
// import Layout from './components/layouts/layout'
import Nav from './components/layouts/nav';
import Content1 from './components/content/content1';
import Sider from './components/layouts/sider';
import Book from './components/content/book';
import Member from './components/content/member';
import Dashboard from './components/content/dashboard'
import Footer from './components/layouts/footer';
import Admin from './components/content/admin';
import CallCard from './components/content/callCard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App flex flex-col'>
        <Nav />
        <div className={`flex `}>
          <Sider />
          <Switch>
            <Route path="/" exact>
              <Dashboard/>
            </Route>
            <Route path="/book" >
              <Book />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/callCard">
              <CallCard/>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router >

  );
}

export default App;
