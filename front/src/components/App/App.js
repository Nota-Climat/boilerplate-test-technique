import { Routes, Route } from 'react-router-dom';
import ClimateDataUpdateForm from '../ClimateDataUpdateForm/ClimateDataUpdateForm';
import Home from '../Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />      
        <Route path="/co2-data-update/form" element={ <ClimateDataUpdateForm/> }/>
      </Routes>
    </div>
  );
}

export default App;
