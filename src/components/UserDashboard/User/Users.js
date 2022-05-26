import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../UserLifeCycle/Loading/Loading';
import UserRow from './UserRow';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://limitless-woodland-16405.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users)
    return (
        <div>
            <h1 className=' text-accent font-extrabold '>All Users: {users.length}!</h1>
            
            <h2 className="text-2xl"></h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users?.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;