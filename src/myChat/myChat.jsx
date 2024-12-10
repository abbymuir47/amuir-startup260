// chat.jsx
import React from 'react';
import { Users } from './users';
import { ChatBox } from './chatBox'; // Correct path to the ChatBox file

export function Chat(props) {
  return (
    <main>
      <Users userName={props.userName} />
      <ChatBox userName={props.userName} />
    </main>
  );
}
