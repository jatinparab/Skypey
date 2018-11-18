import React from "react";
import store from "../store";
import Header from "./Header";
import Chats from "../components/Chats"; 
import MessageInput from "./MessageInput";


import "./ChatWindow.css"
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;