import React from 'react';
import { toast } from 'react-toastify';
import useParts from '../../Hooks/useParts';
import { useNavigate } from 'react-router-dom';

const MP = () => {
      const [parts,setPart]=useParts();
      const navigate =useNavigate();
      const handleDeleteProduct=(id)=>{
        alert('Do you want to delete product');
        const url = `https://limitless-woodland-16405.herokuapp.com/parts/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            
        })
        .then(res=> res.json())
        .then(result =>{
         const remaining = parts.filter(item => item._id !== id);
        setPart(remaining);
        toast('Successfully Delete');
        }, )
        
        
     

        
    
      };
      
      return (
            <div className='gap-4 m-4 p-2' >
                  
                        <div className='grid grid-cols-1 lg:grid-cols-3 '>
                              {
                        parts.map(part=> <div className="card w-96  bg-base-100 shadow-xl">
                              <figure><img style={{height:"200px",width:"200px"}} src={part.img} alt="Shoes" /></figure>
                              <div class="card-body">
                              <h2 class="card-title">{part.name}</h2>
                              <p>{part.description}</p>
                              <p className='font-bold'>Per Unit Price:{part.price} BDT</p>
                              <p className='font-bold'>Available Quantity : {part.availableQuantity} Pcs</p>
                              <p className='font-bold'>Minimum Order : {part.minimumOrder} Pcs</p>
                              
                              <button onClick={()=>handleDeleteProduct(part._id)} class="btn btn-accent">Delete Product</button>
                              </div>
                              </div>
                             )
                  };
                        </div>
                  
            </div>
      );
};

export default MP;