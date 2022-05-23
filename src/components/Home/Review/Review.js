import React from 'react';
import bg from '../../../assets/reviewBg.jpg'
const Review = () => {
      return (       
            <div className='text-center' >
                  <h1 className='text-center text-accent font-extrabold '>Review Section</h1>
                  <div class="card w-96 m-4 shadow-xl image-full">
                  <figure><img src={bg} alt="review section background img" /></figure>
                  <div class="card-body">
                  <h2 className="card-subtitle font-thin">OUR HAPPY CLIENT</h2>
                  <div className='rating mx-auto '>
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                  </div>
                  <p className='font-extralight'>Of course, I would recommend Bike BD page to all bike lovers in Bangladesh. All the genuine reviews and update related to all brands are my favourite.</p>
                  <h4 className="card-subtitle mb-4">Sayed Fahim Akhter</h4>
                  </div>
            </div>
            </div>
      )
};

export default Review;