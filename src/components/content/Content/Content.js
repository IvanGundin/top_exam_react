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
                <Route exact path="/top_exam_react/" element={<Home />} />
                <Route path="/top_exam_react/newLogin" element={<NewLogin />} />
                <Route path="/top_exam_react/profile" element={<Profile />} />
                <Route path="/top_exam_react/friends" element={<Friends />} />
                <Route path="/top_exam_react/add_frend" element={<AddFriends />} />
                <Route path="/top_exam_react/messages/:firstname" element={<Messages />} />
                <Route path="/top_exam_react/news" element={<News />} />
            </Routes>
        </div>)
}

export default Content