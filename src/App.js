import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ChatList from "./Components/ChatList/ChatList";
import GroupModal from "./Components/GroupModal/GroupModal";
import LockIcon from "@mui/icons-material/Lock";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  // const [Display, setDisplay] = useState(true);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    if (selectedGroup) {
      const storedMessages = localStorage.getItem(selectedGroup);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        setMessages([]);
      }
    }
  }, [selectedGroup]);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
    if (selectedGroup) {
      localStorage.setItem(selectedGroup, JSON.stringify(messages));
    }
  }, [groups, selectedGroup, messages]);

  const createGroup = () => {
    setShowCreateGroupModal(true);
  };

  const handleCreateGroup = (groupName) => {
    setGroups([...groups, groupName]);
    setShowCreateGroupModal(false);
  };

  const selectGroup = (group) => {
    setSelectedGroup(group);
    // setDisplay(false);
    setMessages([]);
  };

  const sendMessage = () => {
    if (newMessage) {
      const currentDate = new Date().toLocaleString();
      setMessages([...messages, { text: newMessage, date: currentDate }]);
      setNewMessage("");
    }
  };
  localStorage.removeItem(groups);

  return (
    <div className="app">
      <h1 id="Head">Pocket Notes</h1>
      {selectedGroup ? null : <img src="./Assets/Vector.png" alt="display" />}
      {selectedGroup ? null : (
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      )}
      <div className="Encrypt">
        <h3>
          {" "}
          <LockIcon />
          end-to-end encrypted
        </h3>
      </div>

      <ChatList
        selectedGroup={selectedGroup}
        messages={messages}
        newMessage={newMessage}
        sendMessage={sendMessage}
        setNewMessage={setNewMessage}
      />
      <GroupModal
        showCreateGroupModal={showCreateGroupModal}
        closeCreateGroupModal={() => setShowCreateGroupModal(false)}
        createGroup={handleCreateGroup}
        groups={groups}
        createGroups={createGroup}
        selectGroup={selectGroup}
      />
    </div>
  );
};

export default App;
