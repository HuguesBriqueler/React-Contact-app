import React from "react";
import "./Contact.css";

const Contact = (props) => (
    <div className="Contact">
      <img src={props.avatar} className="avatar" alt="Avatar"/>
      <div className="name">{props.name}</div>
      <div className="status">
        {props.connected ? (
          <div>
            <p className="status-text">Online</p>
            <p className="status-online"></p>
          </div>
        ) : (
          <div>
            <p className="status-text">Offline</p>
            <p className="status-offline"></p>
          </div>
        )}
      </div>
    </div>
)

export default Contact;