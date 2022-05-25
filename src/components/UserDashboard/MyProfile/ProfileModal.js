import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const ProfileModal = () => {
      const [user]=useAuthState(auth);
       const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            console.log(data)
            const url = `http://localhost:5000/updateuser`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        }, )
        
       
      };


      return (
            <div className='m-10 p-6'>
                   <h1 className=' text-accent font-extrabold '>Update Profile!</h1>
                   <form className='flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2' {...register("email")} readOnly/>
                        <input type="text" name="name" value={user?.displayName} id="name" className='border-2 p-2' {...register("name")} />
                        <input className='border-2 p-2' {...register("education")} placeholder='Please Enter Your Lasted Education Degree' />
                        <input className='border-2 p-2' {...register("address")} placeholder='Please provide your address' />
                        <input className='border-2 p-2' type="number" {...register("phone")}  placeholder='Phone Number'/>
                        <input className='border-2 p-2' {...register("photoURL")} placeholder='Your Photo URL' />
                        
                        
                        <input className=' p-2 bg-accent text-white' type="submit" value='UPDATE' />
                  </form> 
                  
    
            </div>
      );
};

export default ProfileModal;