import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket, w3cwebsocket } from "websocket";
import { Data } from "ws";
import Messages from "./Messages";

const ChatRoom = () => {
  const [sendBtn, setSendBtm] = useState(true);
  const [messages, setMessages] = useState<Data[]>([]);
  const [messageBox, setMessageBox] = useState("");
  let ws: w3cwebsocket | null;

  function showMessages(message: Data) {
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessageBox("");
  }

  useEffect(() => {
    if(ws) {
      ws = null;
    }
    ws = new W3CWebSocket("ws://localhost:1234");

    ws.onopen = () => {
      console.log('estabilished')
    }
  
  })

  const handleSend = () => {
    if (!ws || ws.readyState !== W3CWebSocket.OPEN) {
      showMessages("No WebSocket connection or not open");
      return;
    }
    ws.send(messageBox);
    setSendBtm(!sendBtn);
  };

  return (
    <div>
      <h1>chat room</h1>
      <Messages messages={messages} />
      <form action="">
        <label htmlFor="">Enter text here</label>
        <input type="text" onChange={(e) => setMessageBox(e.target.value)} />
        <button onClick={handleSend}>Send message</button>
      </form>
    </div>
  );
};

export default ChatRoom;
