require("../styles/home.scss");
import React, {Component} from 'react';
import MessageList from './MessageList.jsx';


export default class Messages extends Component {
    render() {
        console.log("Rendering <Messages />");

        return(  
        <div>
            <main className="messages">
            {this.props.messages.map(message => {
                switch(message.type) {
                    case "incomingMessage":
                        return (<MessageList message={message} key={message.id}/>);
                        break;
                    case "incomingNotification":
                        return(
                        <div className="message system">
                        {message.content}
                        </div>)
                        break;
                    default:
                        throw new Error("Unknown event type " + message.type);
                }
            })
            }
                {/* <div className="message system">
                Anonymous1 changed their name to nomnom.
                </div> */}
            </main>
      </div>)
    }
}