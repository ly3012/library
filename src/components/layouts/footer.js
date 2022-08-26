// import "antd/dist/antd.min.css";
// import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
import React, { useState } from "react";

const Footer = () => {
    // const [name1, setName1] = useState('');
    // const [name2, setName2] = useState('');
    // const handleEventClick = (event) => {
    //     setName2(name1);
    //     // console.log("Click rồi nhé",event.target.value);
    // }
    // const handleEventOnChange = (event) => {
    //     setName1(event.target.value);
    //     // console.log("Click rồi nhé",event.target.value);
    // }
    return (
       <div className="p-3"
       style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXA1J0wx3rrB73Lp0NyJKyWs9GaIo-QYwnCg&usqp=CAU")`}}
       >
        {/* <input type={'text'} value={name1} onChange={(event)=>handleEventOnChange(event)}/>
        <h1>Tôi tên là: {name2}</h1>
        <button type = 'button' className='bg-fuchsia-400 ' onClick={()=>handleEventClick()}>Clickme!</button> */}
       <h3>Library</h3>
       @abcdxyz
       </div>
    )
}

export default Footer;