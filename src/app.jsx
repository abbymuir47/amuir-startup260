import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Projects } from './projects/projects';
import { Chat } from './chat/chat';

export default function App() {
  return (
    <><header>
          <h1>Abby Muir<sup>&reg;</sup></h1>
          <nav>
              <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="profile.html">User Profile</a></li>
              </ul>
          </nav>
      </header>
      <main>App components go here</main>
      <footer>
        <hr />
        <span class="text-reset">Abby Muir</span>
        <br />
        <a href="https://github.com/abbymuir47/amuir-startup260">GitHub</a>
    </footer></>
  );
}