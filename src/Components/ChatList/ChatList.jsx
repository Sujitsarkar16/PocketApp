import React from "react";
import "./Chatlist.css";
import SendIcon from "@mui/icons-material/Send";
const ChatList = ({
  selectedGroup,
  messages,
  newMessage,
  sendMessage,
  setNewMessage,
}) => {
  return (
    <div className="_Messages">
      <div className="message_header">
        {selectedGroup ? <h2>{selectedGroup}</h2> : null}
      </div>
      <div className="message_container">
        {selectedGroup && (
          <div className="_set">
            <ul id="for-chats">
              {messages.map((message, index) => (
                <li id="msgs" key={index}>
                  <div className="message">{message.text}</div>
                  <div className="date">{message.date}</div>
                </li>
              ))}
            </ul>
            <div className="message-input">
              <input
                type="text"
                placeholder="Enter your text here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={sendMessage}>
                <SendIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
