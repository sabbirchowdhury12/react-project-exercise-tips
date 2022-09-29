import React from 'react';
import img from '../../img/mehu-2.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <img src={img} alt="" />
            <div className='profile-info'>
                <p className='name'>Mehzabien Chowdhury</p>
                <p className='text-center'>Manikganj, Dhaka</p>
            </div>
        </div>
    );
};

export default Profile;