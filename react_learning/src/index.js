import React from 'react';
import './index.css';
import ReactDOM  from 'react-dom/client';
// import App from './App';
// import App from "./components/Keeper/app"
// import App from './components/emoji/app';
// import App from './components/conditionrendering/app';
// import App from './components/conditionrendering_exercise/app';
// import App from './components/useState/app';
// import App from './components/reactForms/app';
// import App from './components/complexState/app';
// import App from './components/complexState_exercise/app';
// import App from './components/spreadOperator_exercise/app';
// import App from './components/componentTree/app';
import App from './components/KeeperAppFinal/app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// ReactDOM.render(<App></App>,document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

