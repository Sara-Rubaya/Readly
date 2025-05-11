import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const {user } = use(AuthContext);
    return (
        <div className='flex gap-16 p-25 mx-auto'> 
            <p className='font-extrabold text-4xl'>User Info:</p>
            <div className=''>
            <img className='w-35 mb-6' alt="user" src={user?.photoURL} />
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            </div>
        </div>
    );
};

export default Profile;