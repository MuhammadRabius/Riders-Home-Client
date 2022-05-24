import React, { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { toast } from 'react-toastify';


const Login = () => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [error,setError]=useState('');
      const location=useLocation();
      const navigate =useNavigate();
      const [signInWithEmailAndPassword,
                  user] = useSignInWithEmailAndPassword(auth);
   
      const [sendPasswordResetEmail] = 
                  useSendPasswordResetEmail(auth);
      const [sendEmailVerification] = useSendEmailVerification(auth);

      const handleEmail =event=>{
            
            setEmail(event.target.value);
           
      }
      const handPassword =(event)=>{
            
           setPassword(event.target.value);
           
      }
      const from = location.state?.from?.pathname ||'/';

      const handleSubmit=async(event)=>{
           event.preventDefault()
           if(!user){
            signInWithEmailAndPassword(email,password);
           await sendEmailVerification(email);
           navigate(from);
           toast.success('Welcome Back,Great to See You Again')
           }
           else{
                 setError('Please make sure your email and Password')
           }
      }
      return (
           <div className='login-container'>
                  <h1 className='text-center font-bold mt-2 text-accent'>Please Login</h1>


                  <div className='flex justify-center p-4 font-thin text-black'>
                  
                   <Form onSubmit={handleSubmit} className='border-2 rounded-md p-4 text-2xl'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='p-3' onBlur={handleEmail} type="email" placeholder="Enter your email" required />
                        <Form.Text className="text-white">
                              We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='p-3' onBlur={handPassword} type="password" placeholder="Password" required/>
                        </Form.Group>
                        
                        <p className='flex items-center text-1xl'>Create New Account?<Nav.Link as={Link} to='/registation'>Register Now</Nav.Link></p>
                        <p className='flex items-center text-1xl'>Forgot Password<Nav.Link onClick={
                              async()=>{
                              await sendPasswordResetEmail(auth)
                              alert('Reset-Password Sent')
                              } } >Reset Password</Nav.Link></p>
                        <p>{error}</p>
                        <Button variant="accent" type="submit">
                        Submit
                        </Button>
                         <GoogleLogin></GoogleLogin>
                  </Form>
                 
            </div>
            
            
           </div>
      );
};

export default Login;