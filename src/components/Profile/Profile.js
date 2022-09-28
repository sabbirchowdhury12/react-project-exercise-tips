import React from 'react';
import img from '../../img/mehu-2.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <img src={img} alt="" />
            <div className='profile-info'>
                <h4 className='m-0 p-0'>Sabbir Chowdhury</h4>
                <p className='m-0 p-0'>MAnikganj, Dhaka</p>
            </div>

        </div>
    );
};

export default Profile;