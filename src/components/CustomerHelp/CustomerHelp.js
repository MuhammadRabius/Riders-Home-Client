import React from 'react';

const CustomerHelp = () => {
      return (
            <div className='grid grid-cols-1 lg:grid-cols-2 m-8  gap-2  '>
            
               <div className='border-2 rounded-xl p-4'>
                     <h1 className=' text-accent font-extrabold '>Orders and Shipping</h1>
                  <div className='mt-4 '>
                  <h5 className='font-bold text-2xl'>How long does it take for me to receive my order?</h5>
                 <p>Usually your order will be shipped 1-2 days after placing your order</p>
                 </div> <br />
                 <div className='mt-4'>
                  <h5 className='font-bold text-2xl'>How do I change my shipping address?</h5>
                 <p>You can change your shipping address after you place an order as long as the item has not shipped. Typically, you can only do this the same day an order was placed because items are shipped as fast as possible.</p>
                 </div> <br />
                 <div className='mt-4'>
                  <h5 className='font-bold text-2xl'>How do I track the status of my order?</h5>
                 <p>Once your order has been shipped, it will appear on your order page</p>
                 </div> 
                 
               </div>
                 
               <div className='border-2 rounded-xl p-4'>
                  <h1 className=' text-accent font-extrabold '>Returns and Exchanges</h1>
                  <div className='mt-4'>
                  <h5 className='font-bold text-2xl'>What is your returns policy?</h5>
                 <p>Returns must be in original condition, unused with original tags and labels. Your return item(s) will be inspected upon arrival before your refund is processed.

                It can take up to 2 days for us to receive and process your return. Once processed, your refund can take up to 2-3 days to reflect on your account statement. You will receive a confirmation email once this is completed.</p>
                 </div> <br />
                 <div className='mt-4'>
                  <h5 className='font-bold text-2xl'>How do I receive customer support?</h5>
                 <p>For Any Queries Contact Customer Care: +880000000 or Email us: support.ridershome@gmail.com </p>
                 </div> <br />
                 <div className='mt-4'>
                  <h5 className='font-bold text-2xl'>What do I do if I entered an incorrect shipping address?</h5>
                 <p>We’re really quick with processing orders to make sure that you receive them as soon as possible.</p>
                 </div> 
               </div>
            
                  
                  

            
            </div>
      );
};

export default CustomerHelp;