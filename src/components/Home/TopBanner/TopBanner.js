import React from 'react';
import { AiFillPhone,AiTwotoneMail,AiOutlineUserAdd,AiOutlineCustomerService } from "react-icons/ai";
import logo from '../../../assets/logo.png'

const TopBanner = () => {
      return (
            <div>
                  <div className='flex justify-around mt-2 font-thin'>
                        <p>1/2, Koshaituli Lane, Bongshal Road, Dhaka-1100</p>
                        <p className='flex items-center gap-2'><AiFillPhone/>0000000000</p>
                        <p className='flex items-center gap-2'><AiTwotoneMail/>support.ridershome@gmail.com</p>
                  </div>
                  <div className='grid grid-cols-3'>
                  <div>
                   <img className='w-56 ml-12' src={logo} alt="Riders-Home Logo" />
                   </div>
                  <div >
                  <div className="form-control mt-24  ">
                  <div class="input-group">
                  <input className='w-full border-2'  type="text" placeholder=" Search…" class="input input-bordered" />
                  <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  
                  </div>
                  </div>
                    
                  </div>
                
                  <div className=' flex justify-center items-center gap-10 '>
                        <div>
                        <AiOutlineUserAdd className='ml-8'/>
                        <p>My Account</p>
                        </div>
                        
                        <div>
                        <AiOutlineCustomerService className='ml-8'/>
                        <p>Customer Help </p>
                        </div>

                  </div>
                  </div>
                  
            </div>
      );
};

export default TopBanner;