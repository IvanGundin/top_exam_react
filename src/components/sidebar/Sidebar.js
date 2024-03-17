import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/top_exam_react/profile">Профиль</Link></li>
                <li><Link to="/top_exam_react/friends">Друзья</Link></li>
                <li><Link to="/top_exam_react/messages">Сообщения</Link></li>
                <li><Link to="/top_exam_react/news">Новости</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar