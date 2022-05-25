import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddReview = () => { const [user]=useAuthState(auth);
      const navigate=useNavigate();
       const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            const addReview ={
                  email : data.email,
                  name:data.name,
                  review:data.review,
                  rating:data.rating,
                  
            }
            const url = `https://limitless-woodland-16405.herokuapp.com/addreview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
                  toast.success(' Review added successful');
                  navigate('/')
            }
        }, )
        
       
      };


      return (
            <div className='m-10 p-6'>
                   <h1 className=' text-accent font-extrabold '>Add Review!</h1>
                   <form className='flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2' {...register("email")} readOnly/>

                        <input type="text" name="name" value={user?.displayName} id="name" className='border-2 p-2' {...register("name")} />
                                               
                        <textarea className='border-2 p-2' required {...register("review")} placeholder='Please provide any Facebook/LinkedIn/Github profile link ' />

                        <input className='border-2 p-2' required type="number" {...register("rating")}  placeholder='Please give us rating out of 5'/>
           
                        <input className=' p-2 bg-accent text-white' type="submit" value='Add Review' />
                  </form> 
                  
    
            </div>
      );
};

export default AddReview;