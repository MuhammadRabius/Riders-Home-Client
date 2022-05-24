import React from 'react';
import useParts from '../Hooks/useParts';

const MotorParts = () => {
     const [parts]=useParts();
      return (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 p-2'>
                  
                        {
                        parts.map(part=> <div className="card w-96  bg-base-100 shadow-xl">
                              <figure><img style={{height:"200px",width:"200px"}} src={part.img} alt="Shoes" /></figure>
                              <div class="card-body">
                              <h2 class="card-title">{part.name}</h2>
                              <p>{part.description}</p>
                              <p className='font-bold'>Per Unit Price:{part.price} BDT</p>
                              <p className='font-bold'>Available Quantity : {part.availableQuantity} Pcs</p>
                              <p className='font-bold'>Minimum Order : {part.minimumOrder} Pcs</p>
                              </div>
                              </div>
                             )
                  };
                  
            </div>
      );
};

export default MotorParts;