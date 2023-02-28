import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import About from './Pages/About';
import Home from './Pages/Home';
// import App from './App';

import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path={'/'} element={<Home />} />
  <Route path={'/About'} element={<About />} />

</Routes>
</BrowserRouter> 
    
);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
