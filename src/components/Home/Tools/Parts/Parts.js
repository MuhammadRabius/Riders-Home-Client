import React from 'react';

const Parts = ({part}) => {
      const {name,description,price,availableQuantity,minimumOrder,img}=part;
      return (
            <div>
                  <div className="card w-96 bg-base-100 shadow-xl">
                              <figure><img src={img} alt="Shoes" /></figure>
                              <div class="card-body">
                              <h2 class="card-title">{name}</h2>
                              <p>{description}</p>
                              <p>Unit Per Price:{price}</p>
                              <p>Available Quantity{availableQuantity}</p>
                              <p>Minimum Order {minimumOrder}</p>
                              <div class="card-actions justify-end">
                              <button class="btn btn-accent">Place Order</button>
                              </div>
                              </div>
                              </div>
            </div>
      );
};

export default Parts;