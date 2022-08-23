// import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import "antd/dist/antd.min.css";
import Nav from'./components/layouts/nav'
import Layout from './components/layouts/layout'
import Login from './components/pages/login'
// import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

function App() {
  // document.body.style.backgroundColor = "green";
  return (
    <div >
    <Layout/>
    </div>
    // <Layout/>
    // <div className="App">
      // <Layout>
      //   <Header>Header</Header>
      //   <Layout>
      //     <Sider>Sider</Sider>
      //     <Content>Content</Content>
      //   </Layout>
      //   <Footer>Footer</Footer>
      // </Layout>

    // </div>
  );
}

export default App;
