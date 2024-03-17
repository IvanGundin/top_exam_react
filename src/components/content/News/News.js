import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import './News.css';

function News() {
    const news = [
        { id: 1, title: "Новость 1", content: "Друзья нашли потерянного кота и вернули его домой." },
        { id: 2, title: "Новость 2", content: "Друзья организовали сбор средств для помощи другу в трудной ситуации." },
        { id: 3, title: "Новость 3", content: "Друзья собрались вместе и провели выходной на природе." },
    ];
    const { state } = useContext(AppContext);
    return (
        <div className="news-container">
            <h2 className="news-title">Последние новости:</h2>
            <ul className="news-list">
                {news.map(item => (
                    <li className="news-item" key={item.id}>
                        <p className="news-item-content"> {item.content}</p>
                    </li>
                ))}
            </ul>
            <hr />
            <h3>следующие сообщения были отправлены друзьям:</h3>
            {state.messages.length === 0 ? (
                <p className="no-messages">Не было сообщений...</p>
            ) : (
                // 
                <ul>
                    {state.messages.map((message, index) => (
                        <li className="news-item-message" key={index}>{message}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}
export default News;