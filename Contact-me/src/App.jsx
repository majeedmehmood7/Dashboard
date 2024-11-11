

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import './App.css';
import Createpost from "./Components/CreatePost";
import Post from "./Components/Post";
import Postlist from "./Components/Postlist";
import { useState } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <div className="app-container">
    <SideBar selectedtab = {selectedtab} setSelectedtab={setSelectedtab}/>
    <div className="app-conatiner2">
    <Header/>
    {/* <Home/> */}
    <Login/>
    {/* {selectedtab === 'Home'? (<Postlist/>) : (<Createpost/>)} */}
    {/* <Footer/> */}
    </div>
    </div>
  )
}

export default App
