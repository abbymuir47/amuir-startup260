// chatBox.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { ChatEvent, ChatNotifierInstance } from './chatNotifier';

export function ChatBox(props) {
  const userName = props.userName;
  
  const [message, setMessage] = React.useState('');
  const [allowUser, setAllowUser] = React.useState(true);

  // Function to send a message
  function sendMessage() {
    if (message.trim()) {
      // Broadcast the message to other users
      ChatNotifierInstance.broadcastEvent(userName, ChatEvent.Message, { msg: message });
      
      // Clear the input field after sending message
      setMessage('');
      setAllowUser(false);
    }
  }

  return (
    <div className="chat-container">
      <h3>Chat Room</h3>

      <div className="message-box">
        {/* Display the messages dynamically */}
        <div className="chat-messages">
          {/* Messages will be displayed by Users component */}
        </div>
      </div>

      <div className="controls-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          disabled={!allowUser} // Disable input until the user is allowed
        />
        <Button variant="primary" onClick={sendMessage} disabled={!allowUser}>
          Send
        </Button>
      </div>
    </div>
  );
}
