import React, { useEffect } from 'react';
import './LoadingPage.css';

function LoadingPage() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = '/feed-india/LoginScreen';
        }, 1750);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='loading__page'>
            <h1>FeedIndia</h1>
            <p>Let's not anyone sleep hungry</p>
            <div class='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingPage;
