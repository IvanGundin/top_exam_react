// import React, { useState } from 'react';
import { useState, useEffect, useContext } from 'react';
import './Login.css';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Login() {
    const { state, setLoggedIn, setNewLoggedIn } = useContext(AppContext);
    const [username, setUsername] = useState('Иван');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const checkLocalStorage = () => {
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');
            if (savedUsername === state.username && savedPassword === state.password) {
                setUsername(savedUsername);
                setPassword(savedPassword);
                setRememberMe(true);
                setLoggedIn(true);
            }
        };
        checkLocalStorage();
    }, [state, setLoggedIn]);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === state.username && password === state.password) {
            setLoggedIn(true);
            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }
        }
    };
    return (
        <>

            <form onSubmit={handleSubmit} className='login-form'>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" autoComplete='off' id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" autoComplete='off' id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='login-form__checkbox'>
                    <label htmlFor="rememberMe">сохранить в localStorage</label>
                    <input type="checkbox" autoComplete='off' id="rememberMe" name="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
                </div>
                <button type="submit">Login</button>
                <Link to="/newLogin" onClick={() => setNewLoggedIn(true)} className='new-login-form'>Новый профиль</Link>
            </form>
        </>
    );
}

export default Login;