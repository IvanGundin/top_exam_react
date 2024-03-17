import { useContext } from 'react';
import './Profile.css';
import AppContext from '../../context/AppContext';

const Profile = () => {
    const { state } = useContext(AppContext);

    return (
        <div className='profile'>
            <h2>Профиль пользователя</h2>
            <p><strong>Имя пользователя:</strong> {state.username}</p>
            <p><strong>Пароль:</strong> {state.password}</p>
            <p><strong>Email:</strong> {state.email}</p>
        </div>
    );
};
export default Profile;