import logo from './logo.svg';
import './App.css';
import FirstUniqueNumber from './components/FirstUniqueNumber';
import PalindromicIndex from './components/PalindromicIndex';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
      <FirstUniqueNumber/>
      <PalindromicIndex/>
      <LikeButton/>
    </div>
  );
}

export default App;
