import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { useParams } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
    const { firstname } = useParams();
    const [inputText, setInputText] = useState('');
    const { dispatch } = useContext(AppContext);
    const handleMessageSubmit = () => {
        if (inputText.trim() !== '') {
            const timeSet = new Date().toLocaleTimeString('ru-RU');
            dispatch({ type: 'ADD_MESSAGE', payload: [firstname, inputText, timeSet] });
            setInputText('');
        }
    };
    const handleTextareaChange = (e) => {
        setInputText(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight - 20) + 'px';
    };

    return (
        <div className="textarea-container">
            <p>{firstname}</p>
            <textarea
                className="textarea-field"
                name='textarea'
                type="text"
                value={inputText}
                onChange={handleTextareaChange}
                placeholder="Введите сообщение для..."
            />
            <button className="textarea-button" onClick={handleMessageSubmit}>сохранить в state</button>
        </div>
    )
}

export default Messages;