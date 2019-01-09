require("../styles/home.scss");
import React, {Component} from 'react';


export default class ChatBar extends Component {
    render() {
        return (
            <div>
                <footer className="chatbar">
                    <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.user.name}/>
                    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
                </footer>
            </div>
        )
    }
}