import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import ProtectRoute from './components/ProtectRoute';
import Messenger  from './components/Messenger';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/messenger/login' element={<Login/>} />
          <Route path='/messenger/register' element={<Register/>} />
          <Route path='/' element = { <ProtectRoute> <Messenger /> </ProtectRoute> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
