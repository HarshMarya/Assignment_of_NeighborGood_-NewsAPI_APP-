import React from 'react';

const Time = () => {
    const convertToIST = (utcDateTimeString) => {
        const utcDate = new Date(utcDateTimeString);
        const istOffset = 5 * 60 + 30; // IST offset in minutes
        const utcTimeInMillis = utcDate.getTime();
        const istTimeInMillis = utcTimeInMillis + istOffset * 60 * 1000;
        const istDate = new Date(istTimeInMillis);
        return istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    };

    const utcDateTimeString = "2024-06-17T06:52:14.8415869Z";
    const istDateString = convertToIST(utcDateTimeString);

    return (
        <div>
            <h1>UTC Date and Time: {utcDateTimeString}</h1>
            <h1>IST Date and Time: {istDateString}</h1>
        </div>
    );
};

export default Time;
