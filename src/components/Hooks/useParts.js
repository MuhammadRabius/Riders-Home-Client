import { useState, useEffect } from 'react';

const useParts =()=>{
      const [parts,setPart] =useState([]);
      useEffect(()=>{
         fetch('http://localhost:5000/parts')
         .then(res=>res.json())
         .then(data=>setPart(data))
      
      },[])

      return [parts,setPart];
}
export default useParts;