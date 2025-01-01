import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import QueryParams from './components/QueryParams';
import Changer from './components/Changer';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards';
import SearchParamsPractice from './components/SearchParamsPractice';
import Table from './components/Table';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/query' element={<QueryParams />} />
          <Route path='/changer' element={<Changer />} />
          <Route path='/about/:aboutId' element={<AboutUs />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/' element={<SearchParamsPractice />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
