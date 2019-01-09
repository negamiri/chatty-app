require("../styles/home.scss");
import React, {Component} from 'react';
import MessageList from './MessageList.jsx';


export default class Messages extends Component {
    render() {
        return(  
        <div>
            <main className="messages">
            {this.props.messages.map(message => {
                return (<MessageList message={message} key={message.id}/>)
            })
            }
                <div className="message system">
                Anonymous1 changed their name to nomnom.
                </div>
            </main>
      </div>)
    }
}