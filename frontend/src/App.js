import './App.css';
import Mangas from './containers/Mangas';
import MangaInput from './components/MangaInput';
import { useDispatch} from "react-redux";
import { postManga } from './slicer/mangaSlice';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Mangas Stalker</h1>
        <MangaInput queryapi={postManga} />
      </div>
      <div className="main">
        <Mangas />
      </div>
    </div>
  );
}

export default App;
