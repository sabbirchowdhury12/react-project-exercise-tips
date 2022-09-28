import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

import './Exercises.css';

const Exercises = ({ time, setTime }) => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, []);

    return (
        <div className='workout-container'>
            <h2>ULTra-Active</h2>
            <h4>Select T0days Exercise</h4>
            <div className='exercise-container'>
                {
                    exercises.map((exercise => <Exercise
                        exercise={exercise}
                        key={exercise.id}
                        time={time}
                        setTime={setTime}
                    ></Exercise>))
                }
            </div>

        </div>
    );
};

export default Exercises;