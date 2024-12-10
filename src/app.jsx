import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Projects } from './projects/projects';
import { Chat } from './chat/chat';
import { Play } from './play/play';
import { ChatBox } from './myChat/chatBox';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <header>
            <h1>Abby Muir<sup>&reg;</sup></h1>
            <nav>
                <ul>
                    <li><NavLink className='nav-link' to='home'>Home</NavLink></li>
                    <li><NavLink className='nav-link' to='about'>About</NavLink></li>
                    <li><NavLink className='nav-link' to='projects'>Projects</NavLink></li>
                    <li><NavLink className='nav-link' to='login'>Login</NavLink></li>
                    {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='chat'>
                            Chat
                        </NavLink>
                        </li>
                    )}
                    {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='play'>
                            Play
                        </NavLink>
                        </li>
                    )}
                    {authState === AuthState.Authenticated && (
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='chatBox'>
                            New Chat
                        </NavLink>
                        </li>
                    )}
                </ul>
                
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/login'
                element={
                <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                    }}
                />
                }
                exact
            />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/chat' element={<Chat userName={userName} />} />
            <Route path='/play' element={<Play userName={userName} />} />
            <Route path='/chatBox' element={<ChatBox userName={userName} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>
            <hr />
            <span className="text-reset">Abby Muir</span>
            <br />
            <a href="https://github.com/abbymuir47/amuir-startup260">GitHub</a>
        </footer>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}