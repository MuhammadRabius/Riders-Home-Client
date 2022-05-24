import { useState, useEffect } from 'react';

const usePartsById =(partsId)=>{
      const [part,setPart] =useState({});

      useEffect(()=>{
         fetch(`http://localhost:5000/parts/${partsId}`)
         .then(res=>res.json())
         .then(data=>setPart(data))
      
      },[partsId])

      return [part,setPart];
}
    export default usePartsById;