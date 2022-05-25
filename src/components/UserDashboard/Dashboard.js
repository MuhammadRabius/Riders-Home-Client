import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () =>{
    const [user] = useAuthState(auth);
    
    return (
        <div class="drawer drawer-mobile">
            <input cla id="my-drawer-2" type="checkbox" class="drawer-toggle " />
            
            <div className="drawer-content bg-stone-50">
                <h2 className='text-4xl mt-4 text-center  font-bold text-accent'> {user?user.displayName:'Welcome to your Dashboard'} Dashboard </h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 bg-teal-50 text-base-content">
                   
                     <li><Link to="/dashboard">My Profile</Link></li>
                     <li><Link to="/dashboard/myorder">My Order</Link></li>
                     <li><Link to="/dashboard/addreview">Add Review</Link></li>
                              
                    { user && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/mp">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;