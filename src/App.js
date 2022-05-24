
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/404Page/NotFoundPage';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navber from './components/Home/Navber/Navber';
import TopBanner from './components/Home/TopBanner/TopBanner';
import PlaceOrder from './components/Purchange/PlaceOrder';
import MotorParts from './components/MotorCyclePart/MotorParts';
import Blog from './components/Blog/Blog';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Login from './components/UserLifeCycle/Login/Login';
import Registation from './components/UserLifeCycle/Registation/Registation';
import CustomerHelp from './components/CustomerHelp/CustomerHelp';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div >
      <TopBanner/>
      <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='/placeorder/:partsId' element={<PlaceOrder/>}> </Route>
       <Route path='/motorparts' element={<MotorParts/>}> </Route>
       <Route path='/blog' element={<Blog/>}> </Route>
       <Route path='/myportfolio' element={<MyPortfolio/>}> </Route>
       <Route path='/login' element={<Login/>}> </Route>
       <Route path='/registation' element={<Registation/>}> </Route>
       <Route path='/customerhelp' element={<CustomerHelp/>}> </Route>
       <Route path='*' element={<NotFoundPage/>}> </Route>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
