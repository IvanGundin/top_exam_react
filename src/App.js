import { useContext } from 'react';
import AppContext from './context/AppContext';
import Contents from './components/content/Contents';
import NewLogin from './components/login/NewLogin';
import Login from './components/login/Login';

const App = () => {
  const { loggedIn, newLoggedIn } = useContext(AppContext);
  return <>
    {loggedIn ? <Contents /> : newLoggedIn ? <NewLogin /> : <Login />}
  </>;
};
export default App;