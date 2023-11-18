import React, { useState } from 'react'
import "../styles/chat.css"
import { useEffect } from 'react';
import socketIO from "socket.io-client";
import { set } from 'mongoose';
import Message from "../Components/Message"
const socket = socketIO("http://localhost:5000/", { transports: ['websocket'] });


export default function Chat() {
  const [messages, setMessages] = useState([])
  
  const users = ["Blahbuddy","boykane","Icecreamman","Happybucket","Sleepycat","Tiredsuperhero","Mistersister","Daddyhelp"] ;
  function name(){

    var randint= Math.floor(Math.random() * users.length);
    console.log(randint);
    let item = users[randint];
    
    document.getElementById("name").innerHTML=item;
    return item;

  }

  

  
  const [id, setId] = useState(" ");

     const send = ()=>{

      const message = document.getElementById('msg-send').value;
      setId(socket.id);

       socket.emit("message",{message,id});

       document.getElementById('msg-send').value=" ";
  }
  
  useEffect(() => {

    

     let user = name();
    
    socket.on("connect", () => {
      
      alert("Connected");
      console.log(socket.id);
      
      


    })

    socket.emit('joined', { user })

   

    socket.on("welcome",(data)=>{
      setMessages([...messages, data]);
      console.log(data.user,data.message);
    })

    
   
  


    return ()=>{

      socket.emit("dis");
      socket.off();

      

    }

  }, [socket]);


  useEffect(()=>{
    socket.on('sendMessage', (data) => {
      setMessages([...messages, data]);
      console.log(data.message, data.id);
  })

  return () => {
    socket.off();
}

  },[messages]);




  

  return (
    <>
    <div className='container'>
      <section className='top-bar'>

      <h5 id="name"></h5>

      </section>

      <div class="Lower-box">
      {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
        <input  id="msg-send" placeholder='Enter Text to Chat'></input>
        <button id="send-btn"  onClick={send}><p>Send</p></button>
      </div>









    </div>
    </>
  )
}

