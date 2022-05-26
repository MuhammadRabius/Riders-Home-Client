import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
      const [user]=useAuthState(auth);
      const [myOrders,setMyOrder]=useState([]);
      const navigate=useNavigate();
      useEffect(()=>{
            const email=user.email;
            fetch(`https://limitless-woodland-16405.herokuapp.com/userorder?email=${email}` )
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
      },[user])
       console.log(myOrders)

       const handleCancelOrder=(id)=>{
             
        alert('Do you want to Cancel');
        const url = `https://limitless-woodland-16405.herokuapp.com/cancel-order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            
        })
        .then(res=> res.json())
        .then(result =>{
        const remaining = myOrders.filter(item => item._id !== id);
        setMyOrder(remaining);
        toast('Successfully Delete');
        }, )
        
       }
      return (
            <div className='m-4 p-4'>
                  <h3 className='font-thin ml-2 text-emerald-500'>Your Order</h3>
                  <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                       
                       
                        <thead>
                              <tr>
                              <th></th>
                              <th>Email</th>
                              <th>Product Name</th>
                              <th>Quantity(Psc)</th>
                               <th>Amount</th>
                              <th>Payment States</th>
                              <tr></tr>
                              <th>Transaction</th>
                              
                              </tr>
                        </thead>
                        <tbody className='font-thin'>
                                                          
                              {
                                    myOrders.map((order,index)=>
                                          <tr key={order._id}>
                              <th>{index + 1}</th>
                              <td>{order.email}</td>
                              <td>{order.partsName}</td>
                              <td>{order.order}</td>
                              <td> {order.amount } BDT</td>
                              <td><button onClick={()=>navigate(`/dashboard/paymet/${order._id}`)} class="btn btn-outline  btn-accent">Make Payment</button></td>
                              <td><button onClick={()=>handleCancelOrder(order._id)} class="btn btn-outline  btn-accent">Cancel Order</button></td>
                              <td></td>
                              
                              </tr>)
                              }                                                        
                              
                        </tbody>
                        </table>
                        </div>
            </div>
      );
};

export default MyOrder;