import React from 'react';
import { ChatEvent, ChatNotifierInstance } from './chatNotifier';

export function Users(props) {
  const userName = props.userName;

  const [events, setEvents] = React.useState([]);

  // Add event listener for incoming chat events
  React.useEffect(() => {
    const handler = (event) => {
      setEvents((prevEvents) => [...prevEvents, event]);
    };
    
    // Subscribe to event handler
    ChatNotifierInstance.addHandler(handler);

    // Cleanup on component unmount
    return () => {
      ChatNotifierInstance.removeHandler(handler);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // Render the list of events as messages
  function createMessageArray() {
    return events.map((event, i) => {
      let message = 'unknown';
      if (event.type === ChatEvent.Message) {
        message = `${event.value.msg}`;
      } else if (event.type === ChatEvent.UserJoined) {
        message = `${event.value.user} joined the chat`;
      } else if (event.type === ChatEvent.UserLeft) {
        message = `${event.value.user} left the chat`;
      } else if (event.type === ChatEvent.System) {
        message = `[System]: ${event.value.msg}`;
      }

      // Split the username (remove email or any extra info if needed)
      const userNameDisplay = event.from.split('@')[0];

      return (
        <div key={i} className="event">
          <span className="user-event">{userNameDisplay}</span> {message}
        </div>
      );
    });
  }

  return (
    <div className="users text-align-left">
      User&nbsp;
      <span className="user-name">{userName}</span>
      <div id="user-messages">{createMessageArray()}</div>
    </div>
  );
}
