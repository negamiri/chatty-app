import React, {Component} from 'react';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    const rand = Math.floor(Math.random() * 5000);
    this.state = {
      currentUser: {
        name: `Default-User-${rand}`},
      messages: [],
      connectedUsers: 0
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
    this.setState({currentUser: {
      name: newUser,}});
  }


  componentDidMount() {

    this.socket.onopen = () => {
    }
          
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (typeof data === "number") {
        this.setState({connectedUsers: event.data});
      } else {
        this.addMessage(data); 
      }
    }

  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand"><img src="../build/logo.png" className="logo"/>Chatter</a>
          <div className="counter">
          {this.state.connectedUsers} users online
          </div>
        </nav>
        <Messages messages={this.state.messages} notifications={this.state.notifications}/>
        <ChatBar user={this.state.currentUser} socket={this.socket} changeUser={this.changeUser} />
      </div>
    );
  }
}


