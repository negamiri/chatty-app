require("../styles/home.scss");
import React, {Component} from 'react';
import MessageList from './MessageList.jsx';


export default class Messages extends Component {
    render() {

        return(  
        <div>
            <main className="messagesContainer">
            {this.props.messages.map(message => {
                switch(message.type) {
                    case "incomingMessage":
                        return (<MessageList message={message} key={message.id}/>);
                        break;
                    case "incomingNotification":
                        return(
                        <div className="message system" key={message.id}>
                        {message.content}
                        </div>)
                        break;
                    default:
                        throw new Error("Unknown event type " + message.type);
                }
            })
            }
            </main>
    </div>)
    }
}