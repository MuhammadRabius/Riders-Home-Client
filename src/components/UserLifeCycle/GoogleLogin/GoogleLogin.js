import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiOutlineGooglePlus } from "react-icons/ai";
import auth from '../../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleLogin = () => {
      const navigate =useNavigate();
      const location =useLocation();
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const from = location.state?.from?.pathname ||'/';     
      if (error) {
            return (
                  <div>
                  <p>Error: {error.message}</p>
                  </div>
            );}

       if(user){
             navigate(from);
              toast.success('Welcome Back,Great to See You Again')
       }    
      return (
            <div>
                  <div className='flex justify-center items-center'>
                  <div style={{height:'1px'}} className='bg-secondary w-50'></div>
                  <p className='mt-2 px-2 italic'>or</p>
                  <div style={{height:'1px'}} className='bg-secondary w-50'></div>
            </div>
                <div>
                </div>
                      <button onClick={()=>signInWithGoogle()} className='border-1 rounded-xl p-2 w-full hover:bg-accent flex items-center'> <AiOutlineGooglePlus className='ml-52'></AiOutlineGooglePlus> <span className='px-4 font-serif'>Google Sing In</span></button>
                      
            </div>
            
      );
};

export default GoogleLogin;