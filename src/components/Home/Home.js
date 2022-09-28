import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Exercises from '../Exercises/Exercises';
import './Home.css';

const Home = () => {
    const [time, setTime] = useState([]);


    return (
        <div className='home'>
            <div className="exercise">
                <Exercises
                    time={time}
                    setTime={setTime}>
                </Exercises>
            </div>
            <div className="cart">
                <Cart></Cart>
                <div className="deatails">
                    <h2>Exercise time: {
                        !time.length ? 0 : time.reduce((prev, current) => prev + current.timeDuration, 0)
                    }</h2>
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;