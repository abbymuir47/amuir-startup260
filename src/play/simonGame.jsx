import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './simonGame.css';

export function SimonGame(props) {
  const userName = props.userName;
  
  const [allowUser, setAllowUser] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [playbackPos, setPlaybackPos] = React.useState(0);

  async function comment() {
    console.log("comment button clicked")
    setAllowUser(false);
    setPlaybackPos(0);
    increaseSequence([]);

    // Let other Users know a new game has started
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  function increaseSequence(previousSequence) {
    const newSequence = [...previousSequence];
    setSequence(newSequence);
  }

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Let other Users know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  }

  return (
<div className='controls-center'>
  <Button variant='primary' onClick={() => comment()}>
    Comment
  </Button>
</div>
  );
}