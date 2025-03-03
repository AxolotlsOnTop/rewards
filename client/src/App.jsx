import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Register from './register/Register.jsx';
import Login from './login/Login.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default App;
