import './App.css';
import ColorButton from './components/ColorButton';
import ListControl from './components/ListControl';

function App() {
  return (
    <div className="App">
      <ColorButton colors={['red', 'green', 'blue', 'yellow']}/>
      <ListControl startingItems={['write code', 'think', 'fix code you wrote']}/>
    </div>
  );
}

export default App;
