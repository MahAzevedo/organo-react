import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>Oi Mádjan</h1>
      <header className="App-header">
      <h1>Oi Mádjan</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. S2 Madi e Tavinho S2 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
