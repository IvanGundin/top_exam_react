import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/profile">Профиль</Link></li>
                <li><Link to="/friends">Друзья</Link></li>
                <li><Link to="/messages">Сообщения</Link></li>
                <li><Link to="/news">Новости</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar