import { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CurrentDateTime from './CurrentDateTime';
import AppContext from '../../context/AppContext';
const Header = () => {
    const { handleLogout } = useContext(AppContext);

    return (
        <header className="header">
            <Link to="/top_exam_react/">Главная</Link>
            <CurrentDateTime />
            <div>
                <Link to="/top_exam_react/profile">Профиль</Link>
                <button onClick={handleLogout}>выйти</button>
            </div>
        </header>
    );
};

export default Header;