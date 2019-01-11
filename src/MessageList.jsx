require("../styles/home.scss");
import React, {Component} from 'react';
import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';
import Linkify from 'linkifyjs/react';

hashtag(linkify);

export default class MessageList extends Component {
    render() {
      // if (this.props.messagesList.indexOf(message) % 2 === 0) {
      return(
        <div className="message">
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content"><Linkify>{this.props.message.content}</Linkify></span>
        </div>
      )
    }
}