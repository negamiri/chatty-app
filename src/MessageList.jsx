require("../styles/home.scss");
import React, {Component} from 'react';
export default class MessageList extends Component {
    render() {
      console.log("Rendering <MessageList />");

      return(
        <div className="message">
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
      )
    }
}