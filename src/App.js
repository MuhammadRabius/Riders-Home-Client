
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/404Page/NotFoundPage';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import TopBanner from './components/Home/TopBanner/TopBanner';

function App() {
  return (
    <div >
  
     <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='*' element={<NotFoundPage/>}> </Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
