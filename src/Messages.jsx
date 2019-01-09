require("../styles/home.scss");
import React, {Component} from 'react';


export default class Messages extends Component {
    render() {
        return(  
        <div>
            <main className="messages">
            {this.props.messages.map(message => {
                    return (
                        <div className="message" key={message.id}>
                            <span className="message-username">{message.username}</span>
                            <span className="message-content">{message.content}</span>
                        </div>
                    )
                })}
                <div className="message system">
                Anonymous1 changed their name to nomnom.
                </div>
            </main>
      </div>)
    }
}