import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Accommodate from "./chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
import MainPage from "./chapter_15/MainPage";
import Sample from "./chapter_15/Sample";

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>
    )
}, 1000);
*/

root.render(
    <React.StrictMode>
        <MainPage />
        <Sample />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
