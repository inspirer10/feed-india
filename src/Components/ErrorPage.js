import React, { useEffect, useState } from 'react';

function ErrorPage() {
    let [time, setTime] = useState(3);

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.history.back();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    setInterval(() => {
        setTime(time - 1);
    }, 1000);

    return (
        <div className='error__page'>
            <h1 className='error__info'>This page does not exists</h1>
            <p className='redirecting__info'>
                {time === 0
                    ? 'Successfully redirecting'
                    : 'Redirecting in ' + time + 's...'}
            </p>
        </div>
    );
}

export default ErrorPage;
