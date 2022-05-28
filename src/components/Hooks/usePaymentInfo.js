import { useState, useEffect } from 'react';

const usePaymentInfo =()=>{
      const [payment,setPayment] =useState([]);
      useEffect(()=>{
      fetchPayment();   
      
      },[])
     const fetchPayment=async()=>{
          fetch('https://limitless-woodland-16405.herokuapp.com/payment-info')
         .then(res=>res.json())
         .then(data=>setPayment(data))
     }
      return [payment,setPayment,fetchPayment];
}
export default usePaymentInfo;