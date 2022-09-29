import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Exercises from '../Exercises/Exercises';
import './Home.css';

const Home = () => {
    const [time, setTime] = useState([]);
    const [count, setCount] = useState(0);

    const breakTime = (time) => {
        localStorage.setItem('time', time);
        const brakeTime = localStorage.getItem("time");
        setCount(brakeTime);
    };
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
                <div className="button">
                    <h2>Add a Break</h2>
                    <button onClick={() => breakTime(10)}>10s</button>
                    <button onClick={() => breakTime(20)}>20s</button>
                    <button onClick={() => breakTime(30)}>30s</button>
                    <button onClick={() => breakTime(40)}>40s</button>
                </div>
                <div className="deatails">
                    <h2>Exercise Deatails</h2>
                    <h2>Exercise Time: {count}</h2>
                    <h2>Exercise time: {
                        !time.length ? 0 : time.reduce((prev, current) => prev + current.timeDuration, 0)
                    }</h2>

                </div>
            </div>
        </div>
    );
};

export default Home;