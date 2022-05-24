import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';



const Registation = () => {
      const [name,setName]=useState('');
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      
      const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate();
      

      const handleName=(e)=>{
            setName(e.target.value)
      }
      const handleEmail=(e)=>{
           setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
            setPassword(e.target.value);
      }
      const handleRegisterForm=(event)=>{
            event.preventDefault();

            createUserWithEmailAndPassword(email,password);
            event.target.reset();
            navigate('/login');
      }
      return (
            <div className=' w-50 mx-auto p-4 border-2 rounded-sm my-5'>
                  <div>
                        <h1 className='text-center'>Please Registration</h1>
                  </div>
                  <div className='p-2 m-2'>
                        <Form onSubmit={handleRegisterForm}>
                              
                        <Form.Group className="mb-3" >
                              <Form.Label >Your Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter your Name" onBlur={handleName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label >Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required/>
                              <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                              </Form.Text>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" onBlur={handlePassword} required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                              </Form.Group>
                              <Button variant="accent" type="submit">
                              Submit
                              </Button>
                              <GoogleLogin></GoogleLogin>
                        </Form>
                  </div>
                  
            </div>
      );
};

export default Registation;