import './App.css';
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Blog from "./Components/Blog"
import Chat from "./Components/Chat"
import socketIO from "socket.io-client";
import { Route, Routes } from "react-router-dom";


import Option_Page from './Components/Option_Page';



function App() {
  
  return (
    <div>
      {/*
      <Body/>
       <Option_Page/>*/}
       <Navbar/>

      <Chat/>




      <Routes>

        <Route  exact path="/blog" element={<Blog />} />
        <Route  exact path="/chat" element={<Chat />} />




      </Routes>














    </div>
  )
}

export default App;
