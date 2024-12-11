import React from 'react';

import { Users } from './users';
import { SimonGame } from './simonGame';

export function Chat(props) {
  return (
    <main>
      <Users userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}
