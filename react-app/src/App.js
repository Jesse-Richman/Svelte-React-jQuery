import logo from './logo.svg';
import './App.css';
import ColorButton from './components/ColorButton';
import ListControl from './components/ListControl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <ColorButton colors={['red', 'green', 'blue', 'yellow']}/>
      <ListControl startingItems={['write code', 'think', 'fix code you wrote']}/>
    </div>
  );
}

export default App;
