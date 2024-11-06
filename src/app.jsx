import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Projects } from './projects/projects';

export default function App() {
  return (
    <BrowserRouter>
        <header>
            <h1>Abby Muir<sup>&reg;</sup></h1>
            <nav>
                <ul>
                    <li><NavLink className='nav-link' to='home'>Home</NavLink></li>
                    <li><NavLink className='nav-link' to='about'>About</NavLink></li>
                    <li><NavLink className='nav-link' to='projects'>Projects</NavLink></li>
                    <li><NavLink className='nav-link' to='profile'>User Profile</NavLink></li>
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>
            <hr />
            <span class="text-reset">Abby Muir</span>
            <br />
            <a href="https://github.com/abbymuir47/amuir-startup260">GitHub</a>
        </footer>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}