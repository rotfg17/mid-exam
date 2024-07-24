import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Timesheet from './pages/Timesheet';

export default function App(){
  return(
 

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/main" element={<Main />}>
  <Route path="timesheet" element={<Timesheet />} />
  </Route>
  <Route path="*" element={<NoPage />} />
</Routes>
</BrowserRouter>
)
};
