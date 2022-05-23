import { useState, useEffect } from 'react';

const useParts =()=>{
      const [parts,setPart] =useState([]);
      useEffect(()=>{
         fetch('https://limitless-woodland-16405.herokuapp.com/parts')
         .then(res=>res.json())
         .then(data=>setPart(data))
      
      },[])

      return [parts,setPart];
}
export default useParts;