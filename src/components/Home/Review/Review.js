import React, { useEffect, useState } from 'react';
import bg from '../../../assets/reviewBg.jpg'
const Review = () => {
      const [reviews,setReview]=useState([]);
      useEffect(()=>{
            fetch('https://limitless-woodland-16405.herokuapp.com/review')
            .then(res=>res.json())
            .then(data=>setReview(data))

      },[])
      return (       
            <div className='text-center' >
                  <h6 className='text-center text-accent font-extrabold '>Review Section</h6>
                  
                  <div className='grid grid-cols-1 lg:grid-cols-3 m-6   '>
                        {
                        reviews.map(review=>
                  <div class="card w-96 gap-4  shadow-xl">     
                  <div class="card-body bg-teal-50 p-4">
                  <h2 className="card-subtitle font-thin">OUR HAPPY CLIENT</h2>
                  <p className='font-extralight'>{review.review}...</p>
                  <p className='font-extralight'>Rating {review.rating} of 5 </p>
                  <h4 className="card-subtitle mb-4">{review.name}</h4>
                  </div>
                  </div>         
                              )
                  }
                  
                        </div>
                 </div>
            
      )
};

export default Review;