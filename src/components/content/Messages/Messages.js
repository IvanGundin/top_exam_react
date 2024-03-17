import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import './Messages.css';

const Messages = () => {
    const [inputText, setInputText] = useState('');
    const { dispatch } = useContext(AppContext);
    const handleMessageSubmit = () => {
        if (inputText.trim() !== '') {
            dispatch({ type: 'ADD_MESSAGE', payload: inputText });
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
            <textarea
                className="textarea-field"
                name='textarea'
                type="text"
                value={inputText}
                onChange={handleTextareaChange}
                placeholder="Введите сообщение..."
            />
            <button className="textarea-button" onClick={handleMessageSubmit}>сохранить в state</button>
        </div>
    )
}

export default Messages;