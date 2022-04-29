import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import DisplayCount from './components/DisplayCount';
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(0);

  let updateCount = (value) => {
    if (value === "reset") {
      setCount(0)
    } else {
      setCount(count + parseInt(value))
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>

        <div>
          <DisplayCount count={count} />
          <Counter updateCount={updateCount} />

        </div>
      </header>
    </div>
  );
}

export default App;
