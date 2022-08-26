// import "antd/dist/antd.min.css";
import Nav from "./nav";
import Sider from "./sider";
import Footer from "./footer";
import Content from "../content/content1";

// import { Layout, Breadcrumb } from 'antd';

function layout() {
  return (
    // <>
    // </>
    <div>
      <Nav />
      <div className={`flex`}>
        <Sider />
        <Content/>
      </div>
      <Footer />
    </div>
  );
}

export default layout;
