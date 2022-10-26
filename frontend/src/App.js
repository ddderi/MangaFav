import './App.css';
import Mangas from './containers/Mangas';
import MangaInput from './components/MangaInput';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Mangas Stalker</h1>
        <MangaInput />
      </div>
      <div className="main">
        <Mangas />
      </div>
    </div>
  );
}

export default App;
