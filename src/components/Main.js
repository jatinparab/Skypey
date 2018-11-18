import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";

const Main = ({ user, activeUserId }) => {
 
    if (!activeUserId) {
      return <main className="Main"><Empty user={user} activeUserId={activeUserId} /></main>;

    } else {
      return <main className="Main"><ChatWindow  activeUserId={activeUserId} /></main>;
    }
  };


export default Main;