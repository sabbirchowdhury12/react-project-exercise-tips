import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import './Cart.css';

const Cart = () => {

    const [time, setTime] = useState([]);


    return (
        <div className='cart'>
            <Profile></Profile>

            <div className="detalse">
                <Home
                    time={time}
                    setTime={setTime}
                ></Home>
            </div>


        </div>
    );
};

export default Cart;