import logo from './chili-pepper.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          QA Training App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <a
            className="App-link"
            href="https://github.com/GoogleChrome/lighthouse-ci"
            target="_blank"
            rel="noopener noreferrer"
        >
          Lighthouse CI
        </a>
        <a
            className="App-link"
            href="https://www.cypress.io/"
            target="_blank"
            rel="noopener noreferrer"
        >
          CypressIO
        </a>
      </header>
    </div>
  );
}

export default App;
