import React from 'react';
import Cart from '../Cart/Cart';
import Exercises from '../Exercises/Exercises';
import './Home.css';

const Home = ({ time, setTime }) => {
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
            </div>
        </div>
    );
};

export default Home;