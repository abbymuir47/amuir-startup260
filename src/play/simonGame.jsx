import React from 'react';

import { Button } from 'react-bootstrap';
import { GameEvent, GameNotifier } from './gameNotifier';
import './simonGame.css';

export function SimonGame(props) {
  const userName = props.userName;
  
  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [playbackPos, setPlaybackPos] = React.useState(0);

  async function reset() {
    setAllowPlayer(false);
    setPlaybackPos(0);
    increaseSequence([]);

    // Let other players know a new game has started
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

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  }

  return (
<div className='controls center'>
          <div className='game-name'>
            Simon<sup>&reg;</sup>
          </div>
          <div className='score center'>{sequence.length === 0 ? '--' : sequence.length - 1}</div>
          <Button variant='primary' onClick={() => reset()}>
            Reset
          </Button>
        </div>
  );
}