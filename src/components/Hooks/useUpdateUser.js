import { useState, useEffect } from 'react';

const useUpdateUser =(user)=>{
      console.log(user);
      const email=user?.email;
      const [updateUser,setUpdateUser] =useState([]);
      useEffect(()=>{
         fetch(`https://limitless-woodland-16405.herokuapp.com/update-user-info/${email}`)
         .then(res=>res.json())
         .then(data=>setUpdateUser(data))
      
      },[])

      return [updateUser,setUpdateUser];
}
export default useUpdateUser;