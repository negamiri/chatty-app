require("../styles/home.scss");
import React, {Component} from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user.name,
            content: ''}

    }


    handleUsername = (event) => {
        this.setState({user: event.target.value});
    }
    
    handleContent = (event) => {
        this.setState({content: event.target.value})
    }

    onEnter = (event) => {
        if(event.keyCode == 13) {
            const message = {
                type: 'postMessage',
                username: this.props.user.name,
                content: this.state.content
            }
            this.props.socket.send(JSON.stringify(message));
            this.setState({content: ''})
        }
    }

    enterNotification = (event) => {
        if (event.keyCode == 13) {
            changeUser(event);
        }
    }

    changeUser = (event) => {
        if (this.props.user.name !== this.state.user) {

            const notification = {
                type: 'postNotification',
                content: `${this.props.user.name} has changed their name to ${this.state.user}`
            }
            this.props.socket.send(JSON.stringify(notification));
            this.props.changeUser(this.state.user);
        }
    }

    render() {
        return (
            <div>
                <footer className="chatbar">
                    <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" 
                    value={this.state.user} onChange={this.handleUsername} onKeyDown={this.enterNotification} onBlur={this.changeUser}/>
                    <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" 
                    value={this.state.content} onChange={this.handleContent} onKeyDown={this.onEnter} />
                </footer>
            </div>
        )
    }
}