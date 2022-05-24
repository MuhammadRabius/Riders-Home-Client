import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () =>{
    const [user] = useAuthState(auth);
    
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl mt-2 text-center font-thin font-bold text-primary'> {user?user.displayName:'Welcome to your Dashboard'} Dashboard </h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    
                    
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myorder">My Order</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    { user && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/mp">Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;