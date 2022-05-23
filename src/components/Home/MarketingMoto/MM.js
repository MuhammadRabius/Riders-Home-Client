import React from 'react';
import { GrMapLocation,GrGlobe,GrHistory,GrNorton} from "react-icons/gr";
const MM = () => {
      return (
            <div className='grid grid-cols-1 lg:grid-cols-4 m-2 p-2 gap-2 font-bold  font-thin'>
                 <div className='flex justify-center items-center gap-3 bg-slate-100 '>
                    <div >
                            <GrMapLocation ></GrMapLocation>
                    </div>
                     <div className='p-4'>
                         <p>Free shipping in Bangladesh
                         <br /> On all orders above ৳ 2000 </p>
                      
                    </div>
                 </div>
                 <div className='flex justify-center items-center gap-3 bg-slate-100 '>
                    <div >
                            <GrHistory ></GrHistory>
                    </div>
                     <div className='p-4'>
                         <p>Easy 7 days returns
                         <br /> 7 days money back guarantee </p>
                      
                    </div>
                 </div>
                 <div className='flex justify-center items-center gap-3 bg-slate-100 '>
                    <div >
                            <GrGlobe ></GrGlobe>
                    </div>
                     <div className='p-4'>
                         <p>Genuine Warranty
                         <br /> Warranty Service will be available</p>
                      
                    </div>
                 </div>
                 <div className='flex justify-center items-center gap-3 bg-slate-100 '>
                    <div >
                            <GrNorton ></GrNorton>
                    </div >
                     <div className='p-4'>
                         <p className='animate__animated animate__bounce '>100% Secure Checkout
                         <br /> Bkash / Rocket / Nagad</p>
                      
                    </div>
                 </div>
            </div>
      );
};

export default MM;