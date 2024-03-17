import Sidebar from '../sidebar/Sidebar';
import Content from './Content/Content';
import Header from '../header/Header';
const Contents = () => {
    return <>
        <Header />
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <Content />
        </div>
    </>
}

export default Contents