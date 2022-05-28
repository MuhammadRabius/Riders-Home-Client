import { useState, useEffect } from 'react';

const usePaymentInfo =()=>{
      const [payment,setPayment] =useState([]);
      useEffect(()=>{
         fetch('http://localhost:5000/payment-info')
         .then(res=>res.json())
         .then(data=>setPayment(data))
      
      },[])

      return [payment,setPayment];
}
export default usePaymentInfo;