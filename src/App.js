
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/404Page/NotFoundPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
     
     <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='*' element={<NotFoundPage/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
