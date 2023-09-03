import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componets/login';
import Register from './componets/register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/messenger/login' element={<Login/>} />
          <Route path='/messenger/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
