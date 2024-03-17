import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import "./Friends.css"

function UserProfileList() {
    const { state, dispatch } = useContext(AppContext);
    return (
        <div className="user-profile-list">
            <Link to="/add_frend">Добавить пользователя</Link>
            {state.profiles ? state.profiles.map((user, i) => (
                <div className="user-profile-card" key={i}>
                    <div>
                        <div className="user-profile-name">{user.firstname} {user.lastname}</div>
                        <img src={user.avatar} alt={user.firstname} />
                    </div>
                    <div className="user-profile-info">
                        <div>Почта: {user.email}</div>
                        <div style={{}}>Город: {user.location}</div>
                        <div style={{ fontWeight: 'bold' }}>Возраст: {user.age}</div>
                    </div>
                    <div className="user-profile-click">
                        <Link to='/messages'>сообщение</Link>
                        <button onClick={() => dispatch({ type: 'REMOVE_PROFILE', payload: user.id })}>Удалить</button>
                    </div>
                </div>
            )) : "Loading..."}

        </div >)
};

export default UserProfileList;