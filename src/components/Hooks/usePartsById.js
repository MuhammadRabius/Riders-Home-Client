import { useState, useEffect } from 'react';

const usePartsById =(partsId)=>{
      const [part,setPart] =useState({});

      useEffect(()=>{
         fetch(`https://limitless-woodland-16405.herokuapp.com/parts/${partsId}`)
         .then(res=>res.json())
         .then(data=>setPart(data))
      
      },[partsId])

      return [part,setPart];
}
    export default usePartsById;