import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';

const Home = () => {
    const notify = () => toast("Wow so easy!", { position: "top-center" });
    const [time, setTime] = useState([]);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);

    const breakTime = (time) => {
        localStorage.setItem('time', time);
        setCount(time);
    };

    useEffect(() => {
        const total = time.reduce((prev, current) => prev + current.timeDuration, 0);
        setTotal(total);
    }, [time]);

    useEffect(() => {
        const getItem = localStorage.getItem('time');
        setCount(getItem);

    }, []);



    return (
        <div>
            <div className='home'>
                <div className="left-sight">
                    <Header></Header>
                    <div className="exercise">
                        <Exercises
                            time={time}
                            setTime={setTime}>
                        </Exercises>
                    </div>
                </div>

                <div className="cart">
                    <Cart></Cart>
                    <div className="break">
                        <h4 className='break-name'>Add A Break</h4>
                        <div className="button">
                            <button onClick={(e) => breakTime(10)}>10s</button>
                            <button onClick={() => breakTime(20)}>20s</button>
                            <button onClick={() => breakTime(30)}>30s</button>
                            <button onClick={() => breakTime(40)}>40s</button>
                        </div>
                    </div>
                    <div className="deatails">
                        <h4 className='detail-name'>Exercise Deatails</h4>
                        <div className="time-total">
                            <p>Exercise Time: </p>
                            <p>{total}  seconds </p>
                        </div>
                        <div className="break-time">
                            <p>Break time: </p>
                            <p>{count} seconds</p>

                        </div>

                    </div>

                    <button onClick={notify} className='btn-completed'>Completed</button>
                    <ToastContainer />
                </div>
            </div>
            <Question></Question>
        </div>
    );
};

export default Home;