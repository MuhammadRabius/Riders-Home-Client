import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ProfileModal from './ProfileModal';
import { Link, useNavigate } from 'react-router-dom';
import useUpdateUser from '../../Hooks/useUpdateUser';

const MyProfile = () => {
      const [user]=useAuthState(auth);
      const navigate = useNavigate();
      const [updateUser] = useUpdateUser();
      console.log(updateUser)
      return (
            <div className='gap-2'>
                 <h1 className=' text-accent font-extrabold '>My Profile!</h1>
                 <div className='lg:flex justify-center items-center gap-10 m-10 p-6 '>
                       <div>
                        <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body items-center p-4 m-6">
                        {
                              user && <>
                              <h2 class="card-title">Mr/Mrs<span className='text-emerald-500 font-bold'> {user?.displayName}</span> Peace upon you</h2> 

                               <p>Email : {user?.email}</p>
                              
                              </>
                        }
                         {
                               updateUser.map(u=>
                                     <div>
                                          <p>Education : {u?`${u.education}`:' '}</p>
                                          <p>Address : {u?`${u.address}`:' '}</p>
                                          <p>Phone : {u?`${u.phone}`:' '}</p>
                                          <a>Social Profile : {u?`${u.social}`:' '}</a>
                                     </div>
                                    )
                         }
                         
                        <div class="card-actions">
                              <label htmlFor="profile-modal" class="btn modal-button" onClick={()=>navigate('/dashboard/profilemodal')} >Update Profile</label>                       
                        </div>
                       

                        </div>
                        </div>
                        </div>
                       <div class="avatar">
                              <div class="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img  src={user?`${user?.photoURL}`:`https://ibb.co/0Z898qL`} alt=''/>
                              </div>
                        </div>

            
                 </div>
        </div>
      );
};

export default MyProfile;