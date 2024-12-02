import React from 'react';

export function Chat(props) {
  return (
    <main className='container-fluid text-center'>
      <h1>My Chats:</h1>
      <p>Here, will get and display previous chats using database data.</p>
      <p>Can also use Websocket to display messages and responses in real time</p>
      <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Enter message here" rows="10"></textarea>
      <form method="get" action="chat.html">
        <button type="submit">Send</button>
      </form>
    </main>
  );
}