"use client"

import CountUp from 'react-countup';

const Count = ({end,start}) => {
    return (
        <div>
            <CountUp
             end={end}
            start={start}
            ></CountUp>
        </div>
    );
};

export default Count;