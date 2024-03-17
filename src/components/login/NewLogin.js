import { useState, useContext } from 'react';
import './Login.css';
import AppContext from '../../context/AppContext';
import { useNavigate } from "react-router-dom";

function NewLogin() {
    const navigate = useNavigate();
    const { dispatch,setNewLoggedIn } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState(''); //Gundin_Ivan
    const [newPassword, setNewPassword] = useState(''); //1234567890

    const newUser = (newUser) => {
        dispatch({ type: 'CHANGE_USER', payload: newUser });
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        const newUsername = e.target.elements.newUsername.value;
        const newPassword = e.target.elements.newPassword.value;
        newUser({ newUsername, newPassword });
        e.target.reset();

        setNewLoggedIn(false)
        navigate("./");
    }

    return (
        <form onSubmit={handlerSubmit} className='login-form'>
            <div>
                <label htmlFor="newUsername">Новое имя пользователя:</label>
                <input type="text" autoComplete='off' id="newUsername" name="newUsername" value={newUsername} onChange={(event) => setNewUsername(event.target.value)} />
            </div>
            <div>
                <label htmlFor="newPassword">Новый пароль:</label>
                <input type="password" autoComplete='off' id="newPassword" name="newPassword" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
            </div>
            <button type="submit">newLoginUser</button>
        </form>
    );
}

export default NewLogin;
