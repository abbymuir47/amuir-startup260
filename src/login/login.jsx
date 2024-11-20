import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Abby's Profile</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}

// export function Profile() {
//   return (
//     <main>
//       <h1>Login</h1>
//       <form method="get" action="about.html">
//         <div>
//           <span>@</span>
//           <input type="text" placeholder="your@email.com" />
//         </div>
//         <div>
//           <span>🔒</span>
//           <input type="password" placeholder="password" />
//         </div>
//         <button type="submit">Login</button>
//         <button type="submit">Create</button>
//       </form>
//     </main>
//   );
// }