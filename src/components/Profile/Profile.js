import React from 'react';
import img from '../../img/mehu-2.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <img src={img} alt="" />
            <div className='profile-info'>
                <p className='name text-center'>Sabbir Chowdhury</p>
                <p className='text-center m-0'>Manikganj, Dhaka</p>
                <p className='text-center'>Age: 22</p>
            </div>
        </div>
    );
};

export default Profile;