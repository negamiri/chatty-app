import React, {Component} from 'react';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <Messages />
        <ChatBar />
      </div>
    );
  }
}
export default App;


