import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './Normalize.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            {/* 'feed-india' || process.env.PUBLIC_URL */}
            <App />
        </Router>
    </React.StrictMode>
);
