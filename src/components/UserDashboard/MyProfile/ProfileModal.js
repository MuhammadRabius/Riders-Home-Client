import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProfileModal = () => {
      const [user]=useAuthState(auth);
      const navigate=useNavigate();
       const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            const updateUser ={
                  email : data.email,
                  name:data.name,
                  education:data.education,
                  address:data.address,
                  phone:data.phone,
                  social:data.socialLink,
                  photoURL:data.photoURL
            }
            const url = `https://limitless-woodland-16405.herokuapp.com/updateuser`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                  toast.success('Profile Update Successful');
                  navigate('/dashboard')
            }
        }, )
        
       
      };


      return (
            <div className='m-10 p-6'>
                   <h1 className=' text-accent font-extrabold '>Update Profile!</h1>
                   <form className='flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2' {...register("email")} readOnly/>
                        <input type="text" name="name" value={user?.displayName} id="name" className='border-2 p-2' {...register("name")} />
                        <input className='border-2 p-2' required {...register("education")} placeholder='Please Enter Your Lasted Education Degree' />
                        <input className='border-2 p-2' required {...register("address")} placeholder='Please provide your address' />
                        <input className='border-2 p-2' required {...register("socialLink")} placeholder='Please provide any Facebook/LinkedIn/Github profile link ' />
                        <input className='border-2 p-2' required type="number" {...register("phone")}  placeholder='Phone Number'/>
                        <input className='border-2 p-2' required {...register("photoURL")} placeholder='Your Photo URL' />
                        
                        
                        <input className=' p-2 bg-accent text-white' type="submit" value='UPDATE' />
                  </form> 
                  
    
            </div>
      );
};

export default ProfileModal;