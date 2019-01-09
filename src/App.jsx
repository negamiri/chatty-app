import React, {Component} from 'react';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name: "Bob"
      },
      messages: [{
        id: 1,
        username: "Bob",
        content: "Has anyone seen my marbles?"
      },
      {
        id: 2,
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
    ]
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <Messages messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} />
      </div>
    );
  }
}


