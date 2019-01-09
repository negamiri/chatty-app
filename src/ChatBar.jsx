require("../styles/home.scss");
import React, {Component} from 'react';


export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                id: '',
                username: '',
                content: ''
            }
        }
    }


    handleChange = (event) => {
        this.setState({
            message: {
                id: Math.floor(Math.random() * 1000),
                username: this.props.user.name,
                content: event.target.value
            }
        })
    }

    onEnter = (event) => {
        if(event.keyCode == 13 && event.shiftKey == false) {
            event.preventDefault();
            this.props.handler(this.state.message);
            this.setState({
                message: {
                    id: '',
                    username: '',
                    content: ''
                }
            })
        }
    }

    render() {
        return (
            <div>
                <footer className="chatbar">
                    <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.user.name}/>
                    <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.message.content} onChange={this.handleChange} onKeyDown={this.onEnter} />
                </footer>
            </div>
        )
    }
}