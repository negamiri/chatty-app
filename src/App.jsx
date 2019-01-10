import React, {Component} from 'react';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }

    this.socket = new WebSocket("ws://localhost:3001");

    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }


  addMessage(newMessage) {
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages})
  }

  changeUser(newUser) {
    this.setState({currentUser: {name: newUser}});
  }


  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket.onopen = () => {
      console.log("Connected to the server");
    }

    this.socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      this.addMessage(parsed);      
    }

  }

  render() {
    console.log("Rendering <App />");

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Yapper</a>
        </nav>
        <Messages messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} socket={this.socket} changeUser={this.changeUser} />
      </div>
    );
  }
}


