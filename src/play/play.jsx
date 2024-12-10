import React from 'react';

import { Users } from './users';
import { SimonGame } from './simonGame';

export function Play(props) {
  return (
    <main>
      <Users userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}
