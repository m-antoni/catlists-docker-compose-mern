import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatBreed from './Components/CatBrowser/CatBreed';
import BreedProvider from './Context/BreedContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';
import PageNotFound from './Components/PageNotFound';
import SingleCatBreed from './Components/CatBrowser/SingleCatBreed';
import Navigationbar from './Components/Layouts/Navigationbar';
import MyCatList from './Components/MyList/MyCatList';

function App() {
  return (
    <BreedProvider>
      <BrowserRouter>
        <Navigationbar/>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path='/' element={<CatBreed/>} />
          <Route path='/my-list' element={<MyCatList/>} />
          <Route path='/:catId' element={<SingleCatBreed/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </BreedProvider>
  );
}

export default App;
