import React from 'react';
import './Exercise.css';
const Exercise = ({ exercise, time, setTime }) => {


    const { id, img, name, age, timeDuration, desc } = exercise;

    const handClick = () => {
        let newTime = {
            timeDuration
        };

        // const cart = JSON.parse(localStorage.getItem('card'));
        if (time?.length) {
            setTime([...time, newTime]);
            return;
        } else {
            setTime([newTime]);
            return;
        }

        // console.log(time);
    };

    return (
        <div className='exercise-box'>
            <img src={img} alt="" />
            <div className="info">
                <h4>{name}</h4>
                <p>{desc}</p>
                <p>age: {age}</p>
                <p>Time: {timeDuration}m</p>
            </div>
            <button onClick={() => handClick()} className='list-btn btn btn-primary'>Add to list</button>

        </div>
    );
};

export default Exercise;