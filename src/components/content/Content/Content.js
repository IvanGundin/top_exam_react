import { Route, Routes } from 'react-router-dom';
import NewLogin from '../../login/NewLogin';
import Home from '../Home/Home';
import Profile from '../../profile/Profile';
import Friends from '../Friends/Friends';
import News from '../News/News';
import AddFriends from '../AddFriends/AddFriends';
import Messages from '../Messages/Messages';
import './Content.css'

const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/newLogin" element={<NewLogin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/add_frend" element={<AddFriends />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>)
}

export default Content