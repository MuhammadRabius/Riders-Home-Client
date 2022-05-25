import { useState, useEffect } from 'react';

const useUpdateUser =()=>{
      const [updateUser,setUpdateUser] =useState([]);
      useEffect(()=>{
         fetch('http://localhost:5000/update-user-info')
         .then(res=>res.json())
         .then(data=>setUpdateUser(data))
      
      },[])

      return [updateUser,setUpdateUser];
}
export default useUpdateUser;