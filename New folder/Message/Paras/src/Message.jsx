// MessageApp.js

import  { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Message.css";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messageListSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const messageFormSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, id: new Date().getTime() }]);
      setNewMessage("");
    }
  };

  return (
    <animated.div style={messageListSpring} className="message-app">
      <animated.div style={messageFormSpring} className="message-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </animated.div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </animated.div>
  );
};

export default Message;
