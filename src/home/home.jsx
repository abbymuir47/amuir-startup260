import React from 'react';
import './home.css';

export function Home() {
  return (
    <main>
        <div id="picture" class="picture-box">
            <img src="images/collage_ss.png" alt="random" />
        </div>
        {/*
        <div class="login">
            <form method="get" action="profile.html">
                <div>
                    <label for="email">Email:</label>
                    <span>@</span>
                    <input type="text" id="email" placeholder="your@email.com" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <span>🔒</span>
                    <input type="password" id="password" placeholder="password" />
                </div>
                <button type="submit">Login</button>
                <button type="button">Create</button>
            </form>
        </div>
        */}
        <div class="chat">
            <h3>Chat with me!</h3>
            <form method="get" action="chat.html">
                <button type="submit">Chat Now</button>
            </form>
        </div>
    </main>
  );
}