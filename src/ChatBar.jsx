require("../styles/home.scss");
import React, {Component} from 'react';
const uuidv1 = require('uuid/v1');

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {content: ''}
    }

    handleUsername = (event) => {
        this.props.changeUser(event.target.value);
    }

    handleContent = (event) => {
        this.setState({content: event.target.value})
    }

    onEnter = (event) => {
        if(event.keyCode == 13) {
            const message = {
                id: uuidv1(),
                username: this.props.user.name,
                content: this.state.content
            }
            this.props.socket.send(JSON.stringify(message));
            this.setState({content: ''})
        }
    }

    render() {
        console.log("Rendering <ChatBar />");

        return (
            <div>
                <footer className="chatbar">
                    <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.user.name} onChange={this.handleUsername}/>
                    <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.handleContent} onKeyDown={this.onEnter} />
                </footer>
            </div>
        )
    }
}