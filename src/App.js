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

function App() {

  const [count, setCount] = useState(0);

  let handleClick = (e) => {
    console.log(e.target)
    if (e.target.dataset.calc === "reset") {
      setCount(0)
    } else {
      setCount(count + parseInt(e.target.dataset.calc))
    }

    console.log("button clicked", count)
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
          <p>You have clicked {count} times</p>
          <button data-calc="-5" onClick={handleClick}>-5</button>
          <button data-calc="-1" onClick={handleClick}>-1</button>
          <button data-calc="reset" onClick={handleClick}>Reset</button>
          <button data-calc="1" onClick={handleClick}>+1</button>
          <button data-calc="5" onClick={handleClick}>+5</button>
        </div>
      </header>
    </div>
  );
}

export default App;
