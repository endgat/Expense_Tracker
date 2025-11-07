import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}from "react-router-dom";
import Login from './assets/pages/Auth/Login';
import SignUp from './assets/pages/Auth/SignUp';
import Home from './assets/pages/DashBoard/Home';
import Income from './assets/pages/DashBoard/Income';
import Expense from './assets/pages/DashBoard/Expense';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/Dashboard' element={<Home />}/>
          <Route path='/income' element={<Income />}/>
          <Route path='/Expense' element={<Expense />}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
  // check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  // if the user is authenticated, navigate to "/Dashboard", otherwise navigate to "/login"
  if (isAuthenticated) {
    return <Navigate to="/Dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};