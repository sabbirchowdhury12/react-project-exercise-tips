import React from 'react';
import './Exercise.css';
const Exercise = ({ props }) => {
    // console.log(props);
    const { img, name, age, time, desc } = props.exercise;
    return (
        <div className='exercise-box'>
            <img src={img} alt="" />
            <div className="info">
                <h4>{name}</h4>
                <p>{desc}</p>
                <p>age: {age}</p>
                <p>Time: {time}</p>
            </div>
            <button className='list-btn btn btn-primary'>Add to list</button>

        </div>
    );
};

export default Exercise;