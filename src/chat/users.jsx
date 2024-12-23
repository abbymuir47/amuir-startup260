import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';
import './players.css';

export function Users(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, [events]);

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === GameEvent.End) {
        message = `scored ${event.value.score}`;
      } else if (event.type === GameEvent.Start) {
        message = ` entered the chat`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <>
    <h2>Welcome to the chat room</h2>
    <div className='users text-align-left'>
      User&nbsp;
      <span className='user-name'>{userName}</span>
      <div id='user-messages'>{createMessageArray()}</div>
    </div>
    </>
  );
}
