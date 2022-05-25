import { useState, useEffect } from 'react';

const useUpdateUser =()=>{
      const [updateUser,setUpdateUser] =useState([]);
      useEffect(()=>{
         fetch('https://limitless-woodland-16405.herokuapp.com/update-user-info')
         .then(res=>res.json())
         .then(data=>setUpdateUser(data))
      
      },[])

      return [updateUser,setUpdateUser];
}
export default useUpdateUser;