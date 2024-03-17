import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import styles from "./Friends.module.css"

function UserProfileList() {
    const { state, dispatch } = useContext(AppContext);
    return (
        <div className={styles.user_profile_list}>
            <Link to="/top_exam_react/add_frend">Добавить пользователя</Link>
            {state.profiles ? state.profiles.map((user, i) => (
                <div className={styles.user_profile_card} key={i}>
                    <div>
                        <div className={styles.user_profile_name}>{user.firstname} {user.lastname}</div>
                        <img src={user.avatar} alt={user.firstname} />
                    </div>
                    <div className={styles.user_profile_info}>
                        <div>Почта: {user.email}</div>
                        <div style={{}}>Город: {user.location}</div>
                        <div style={{ fontWeight: 'bold' }}>Возраст: {user.age}</div>
                    </div>
                    <div className={styles.user_profile_click}>
                        <Link to={`/top_exam_react/messages/${user.firstname}`}>сообщение</Link>
                        <button onClick={() => dispatch({ type: 'REMOVE_PROFILE', payload: user.id })}>Удалить</button>
                    </div>
                </div>
            )) : "Loading..."}

        </div >)
};

export default UserProfileList;