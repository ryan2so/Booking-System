import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route , Link, Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/home" element={<Homescreen />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
