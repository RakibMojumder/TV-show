import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const Spinner = ({ isLoading }) => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <FadeLoader
                color="red"
                loading={isLoading}
                size={150}
            />
        </div>
    );
};

export default Spinner;