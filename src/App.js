
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
import RequireAuth from './components/UserLifeCycle/RequireAuth/RequireAuth'
import MyProfile from './components/UserDashboard/MyProfile/MyProfile';
import Dashboard from './components/UserDashboard/Dashboard';
import MyOrder from './components/UserDashboard/Myorder/MyOrder';
import AddReview from './components/UserDashboard/AddReview/AddReview';
import AddProduct from './components/UserDashboard/AddAProduct/AddProduct';
import MP from './components/UserDashboard/ManageProducts/MP';
import Users from './components/UserDashboard/User/Users';
import Paymet from './components/UserDashboard/Payment/Paymet';
import ManageAllOrders from './components/UserDashboard/ManageAllOrders/ManageAllOrders';
function App() {
  return (
    <div >
      <TopBanner/>
      <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='/placeorder/:partsId' element={
         <RequireAuth>
           <PlaceOrder/>
         </RequireAuth>
       }> </Route>
       <Route path='/motorparts' element={<MotorParts/>}> </Route>
       <Route path='/blog' element={<Blog/>}> </Route>
       <Route path='/myportfolio' element={<MyPortfolio/>}> </Route>
       <Route path='/login' element={<Login/>}> </Route>
       <Route path='/registation' element={<Registation/>}> </Route>
       <Route path='/customerhelp' element={<CustomerHelp/>}> </Route>
       <Route path='/myprofile' element={<MyProfile/>}> </Route>
       <Route  path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}> 
          <Route index element={<MyProfile/>}> </Route>
          <Route path='myorder' element={<MyOrder/>}> </Route>
          <Route path='addreview' element={<AddReview/>}> </Route>
          <Route path='addproduct' element={<AddProduct/>}> </Route>
          <Route path='mp' element={<MP/>}> </Route>
          <Route path='users' element={<Users/>}> </Route>
          <Route path='paymet' element={<Paymet/>}> </Route>
          <Route path='manageallorders' element={<ManageAllOrders/>}> </Route>
                    
       </Route>
       <Route path='*' element={<NotFoundPage/>}> </Route>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
