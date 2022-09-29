import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className='d-flex align-items-center gap-2'>
                <FontAwesomeIcon className='icon' icon={faDumbbell} />
                <h2 className='title'>EXERCISE_TIPS</h2>
            </div>
            <h4 className='mb-4'>Build Your Body, Transform Your Life </h4>
        </div>
    );
};

export default Header;;