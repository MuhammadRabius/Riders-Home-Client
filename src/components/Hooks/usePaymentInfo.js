import { useState, useEffect } from 'react';

const usePaymentInfo =()=>{
      const [payment,setPayment] =useState([]);
      useEffect(()=>{
         fetch('https://limitless-woodland-16405.herokuapp.com/payment-info')
         .then(res=>res.json())
         .then(data=>setPayment(data))
      
      },[])

      return [payment,setPayment];
}
export default usePaymentInfo;