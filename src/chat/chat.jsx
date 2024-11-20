import React from 'react';

export function Chat(props) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <Users userName={props.userName} />
    </main>
  );
}