import { createContext, useState, useReducer } from 'react';
import initialState from './initialState';

const AppContext = createContext();
function friendsReducer(state, action) {
    switch (action.type) {
        case 'ADD_PROFILE':
            return {
                ...state,
                profiles: [action.payload, ...state.profiles]
            };
        case 'REMOVE_PROFILE':
            return {
                ...state,
                profiles: state.profiles.filter(user => user.id !== action.payload)
            };
        case 'CHANGE_USER':
            return {
                ...state,
                username: action.payload.newUsername,
                password: action.payload.newPassword
            };
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, 'Сообщение для ' + action.payload[0] + ': "' + action.payload[1] + '", отправлено в ' + action.payload[2]]
            };
        default:
            return state;
    }
}
export function AppProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [newLoggedIn, setNewLoggedIn] = useState(false);
    const [state, dispatch] = useReducer(friendsReducer, initialState);
    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    };
    return (
        <AppContext.Provider value={{ loggedIn, handleLogout, setLoggedIn, state, dispatch, newLoggedIn, setNewLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;