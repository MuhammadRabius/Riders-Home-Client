import React from 'react';
import usePaymentInfo from '../../Hooks/usePaymentInfo';

const ManageAllOrders = () => {
      const [payment]=usePaymentInfo();
      console.log(payment);
      return (
            <div className='m-4 p-4'>
                  <h3 className='font-thin ml-2 text-emerald-500'>All Orders</h3>
                  <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                       
                       
                        <thead>
                              <tr>
                              
                             
                              <th>Product ID</th>
                              <th>transactionId</th>
                               <th>Amount</th>
                              <th>States</th>
                              <tr></tr>
                              <th></th>
                              
                              </tr>
                        </thead>
                        <tbody className='font-thin'>
                                                          
                              {
                                    payment.map((p,index)=>
                                          <tr key={p._id}>
                              <th>{index + 1}</th>
                              <td>{p.PartsOrder}</td>
                              <td>{p.transactionId}</td>
                              
                             
                              <td><button class="btn btn-outline  btn-accent"></button></td>
                              <td><button class="btn btn-outline  btn-accent">Cancel Order</button></td>
                              <td></td>
                              
                              </tr>)
                              }                                                        
                              
                        </tbody>
                        </table>
                        </div>
            </div>
      );
};

export default ManageAllOrders;