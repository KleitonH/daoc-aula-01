import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.jsx';
import CardList from './components/CardList/CardsList.jsx'; 
import Location from './components/Location/Location.jsx'


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/location" element={<Location />} />
          <Route path="/cards" element={<CardList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




