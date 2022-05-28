import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../UserLifeCycle/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3iJQFhRjfPXRb0ygQC8ez805xXVCnrAie8Alncb3QEWsSZ7TXbpEbONqHXCVFhHF46h1ioHdwkgx0vG3aFZtHS00AzHFSOGP');

const Paymet = () => {
      const [user]=useAuthState(auth);
      const {id} =useParams();
      const url = `https://limitless-woodland-16405.herokuapp.com/payment-item/${id}`;
      console.log(url);
      
      const { data: paymentOrder, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(paymentOrder);
    if (isLoading) {
        return <Loading></Loading>
    }
      return (
            <div className='lg:flex lg:justify-center lg:items-center mx-auto'>
                  {/* <h1>This is Payment Section: {id}</h1> */}
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {user?.displayName}</p>
                    <h2 class="card-title">Please Pay for {paymentOrder.partsName}</h2>
                    <p>Your Total Order Quantity: <span className='text-orange-700'>{paymentOrder.order}</span></p>
                    <p>Please pay: ${paymentOrder.amount}</p>
            </div>
            </div>
            <div class="card flex-shrink-0 w-50 m-4 max-w-md shadow-2xl bg-base-100">
                <div class="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentOrder={paymentOrder} />
                    </Elements>
                </div>
            </div>
            </div>
      );
};

export default Paymet;