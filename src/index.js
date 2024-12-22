import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Normalize } from "styled-normalize";
import { ThemeContext } from "./ThemeContext";
import App from "./App";
import { GlobalStyles } from "./styles/global";
import "./assets/css/fonts.css";
import "./assets/icons/icomoon/css/icomoon.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeContext>
            <Normalize />
            <GlobalStyles />
            <App />
        </ThemeContext>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
