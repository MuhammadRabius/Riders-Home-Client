import React from 'react';
import { Link } from 'react-router-dom';
import usePaymentInfo from '../../Hooks/usePaymentInfo';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
      const [payment,,fetchPayment]=usePaymentInfo();
      console.log(payment);
      const id = payment.orderPartsId
      
      const handleShipment=(id)=>{
            const states = 'Shipped'
            const  updateShippemt ={
                  states:states,
                 
            }

        const url = `https://limitless-woodland-16405.herokuapp.com/update-states-parts/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            
            body:JSON.stringify(updateShippemt)
        })
        .then(res=> res.json())
        .then(result =>{
        console.log(result)
        fetchPayment();
        toast('Product has been shipped');
        }, )
       

      }
      
      return (
            <div className='m-4 p-4'>
                  <h3 className='font-thin ml-2 text-emerald-500'>All Orders</h3>
                  <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                       
                       
                        <thead>
                              <tr>
                              
                             
                              <th></th>
                              <th>transaction ID</th>
                               <th>Parts ID</th>
                              <th>States</th>
                              
                              
                              </tr>
                        </thead>
                        <tbody className='font-thin'>
                                                          
                              {
                                    payment.map((p,index)=>
                                          <tr key={p._id}>
                              <th>{index + 1}</th>
                              <td>{p.orderPartsId}</td>
                              <td>{p.transactionId}</td>

                              {/* {(p.transactionId && p.states) && 
                                          <button className='btn btn-xs btn-accent p-2'>Make Shipment</button>
                                          }
                                    
                                    {(p.transactionId && !p.states) && <div>
                                        <p><span className='font-bold text-success'>Shipped</span></p>
                                        
                                    </div>} */}


                              <td className='font-bold'>{p.states}</td>
                              <td><button onClick={()=>handleShipment(p._id)} class="btn btn-outline  btn-accent">Make Shipment</button></td>
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