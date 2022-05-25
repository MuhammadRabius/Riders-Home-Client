import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
      const [user]=useAuthState(auth);
      const [myOrders,setMyOrder]=useState([]);
      
      useEffect(()=>{
            const email=user.email;
            fetch(`https://limitless-woodland-16405.herokuapp.com/userorder?email=${email}` )
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
      },[user])
      
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
                              <th>Payment States</th>
                              <th>Transaction</th>
                              <th>Comment/Query</th>
                              </tr>
                        </thead>
                        <tbody className='font-thin'>
                                                          
                              {
                                    myOrders.map(order=>
                                          <tr>
                              <th>1</th>
                              <td>{order.email}</td>
                              <td>{order.partsName}</td>
                              <td>{order.order}</td>
                              <td><button class="btn btn-outline  btn-accent">Make Payment</button></td>
                              <td><button class="btn btn-outline  btn-accent">Cancel Order</button></td>
                              <td></td>
                              <td>pending</td>
                              </tr>)
                              }                                                        
                              
                        </tbody>
                        </table>
                        </div>
            </div>
      );
};

export default MyOrder;