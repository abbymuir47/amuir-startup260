import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './simonGame.css';

export function SimonGame(props) {
  const userName = props.userName;
  const buttons = new Map();
  const mistakeSound = new Audio(`/error.mp3`);

  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [playbackPos, setPlaybackPos] = React.useState(0);

async function reset() {
    setAllowPlayer(false);
    setPlaybackPos(0);
    await buttonDance(1);
    increaseSequence([]);

    // Let other players know a new game has started
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  }

  return (
    <main className='container-fluid text-center'>
      <h1>My Chats:</h1>
      <p>Here, will get and display previous chats using database data.</p>
      <p>Can also use Websocket to display messages and responses in real time</p>
      <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Enter message here" rows="10"></textarea>
      <Button variant='primary' onClick={() => reset()}>
         Send
        </Button>
    </main>
  );

}