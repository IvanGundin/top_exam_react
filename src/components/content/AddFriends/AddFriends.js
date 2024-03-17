import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import './AddFriends.css'

const AddFriends = () => {
    const { state, dispatch } = useContext(AppContext);
    const addUser = (user) => {
        dispatch({ type: 'ADD_PROFILE', payload: user });
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target.elements.firstname.value;
        const lastname = e.target.elements.lastname.value;
        const email = e.target.elements.email.value;
        const avatar = e.target.elements.avatar.value;
        const location = e.target.elements.location.value;
        const age = e.target.elements.age.value;
        addUser({ firstname, lastname, email, avatar, age, location });
        e.target.reset();
    }
    return (
        <div className='form-container'>
            <h2>Добавь друга</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" autoComplete='off' name="firstname" placeholder="имя" />
                <input type="text" autoComplete='off' name="lastname" placeholder="фамилия" />
                <input type="email" autoComplete='off' name="email" placeholder="email" defaultValue={'moscow@top-academy.ru'} />
                <input type="text" autoComplete='off' name="avatar" placeholder="ссылка на аватар" defaultValue={'https://static.tildacdn.com/tild6635-6238-4266-a233-303037393136/___2.jpeg'} />
                <input type="text" autoComplete='off' name="age" placeholder="возраст" defaultValue={'29'} />
                <input type="text" autoComplete='off' name="location" placeholder="место пребывания" defaultValue={'Москва'} />
                <button type="submit">Add User</button>
            </form>
            <h2>Список моих друзей</h2>
            <ul>
                {state.profiles.map((user, index) => (
                    <li key={index}>
                        <img src={user.avatar} alt={user.firstname} />{user.firstname} {user.lastname}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddFriends;