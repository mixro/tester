import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tang Tech & Engineering Ltd
        </p>
        <a
          className="App-link"
          href="https://www.tangtecheng.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.tangtecheng.com
        </a>
      </header>
    </div>
  );
}

export default App;
