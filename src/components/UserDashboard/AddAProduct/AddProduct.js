import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProduct = () => {
      const [user]=useAuthState(auth);
      const navigate=useNavigate();
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            console.log(data)
        const url = `http://localhost:5000/parts`;
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
        toast('Successfully Added')
       navigate('/')
      };

      return (
             <div className='lg:flex justify-center items-center m-4 p-2 gap-3'>
                  <div className='w-full lg:w-50 mx-auto p-6 mt-10 border-4'>
                        <h3 className='text-center text-4xl font-bold'>Create New Product</h3>
                   <form className='  flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2' {...register("email")} readOnly/>
                        <input type="text" name="name" value={user.displayName} id="name" className='border-2 p-2' {...register("userName")} readOnly/>
                        <input type="text" name="name2" placeholder='Please write product name' id="name2" className='border-2 p-2' {...register("name")} required />
                        <input className='border-2 p-2' {...register("img")} placeholder='Category Photo URL' />
                        <textarea className='border-2 p-2' {...register("description")}  placeholder='Write Medicine Description' />
                        <input className='border-2 p-2' type="number" {...register("availableQuantity")}  placeholder='Please put available Quantity'/>
                        <input className='border-2 p-2' type="number" {...register("minimumOrder")}  placeholder='Please put minimum order Quantity'/>
                        <input className='border-2 p-2' type="number" {...register("price")}  placeholder='Per Unit Price'/>
                        
                        <input className=' p-2 bg-blue-500 text-white' type="submit" value='Add Product' />
                  </form> 
                  </div>
            </div>
      );
};

export default AddProduct;