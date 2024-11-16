import React from 'react';
import './login.css';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Abby's Portfolio</h1>}
        {authState === AuthState.Authenticated && <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />}
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

export function Profile() {
  return (
    <main>
      <h1>Login</h1>
      <form method="get" action="about.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
      <h2>Edit Profile</h2>
      <form method="get" action="about.html">
        <p>User_Name</p>
        <button type="submit">Edit User Name</button>
        <div id="picture" class="picture-box">
            <img width="100px" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="random" />
        </div>
        <button type="submit">Edit Photo</button>
        <p>Get like history - this will access database data</p>
        <p>Get comment history - this will access database data</p>
      </form>
    </main>
  );
}