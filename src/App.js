import MainContent from './components/Main-Content';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* main router view */}
      <Routes>
        <Route path='/*' element={<MainContent />} />
      </Routes>

    </div >
  );
}

export default App;
