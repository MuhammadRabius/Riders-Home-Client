import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Users = () => {
      const [user]=useAuthState(auth);
      return (
            <div>
                 <h1>this is user section</h1> 
            </div>
      );
};

export default Users;