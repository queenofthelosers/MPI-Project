import React from 'react';
import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Login from "../src/Components/Login"
import UploadImage from "../src/Components/UploadImage"
import PrivateRoute from "../src/Components/PrivateRoute"
import Dashboard from './Components/Dashboard';
import CarLogs from './Components/CarLogs';
import Requests from "./Components/Requests";
function App() {
  return (
    <Router>
      <Route exact path = "/" component = {Login}></Route>
      <PrivateRoute exact path = "/upload" component = {UploadImage}></PrivateRoute>
      <PrivateRoute exact path = "/dashboard" component = {Dashboard}></PrivateRoute>
      <PrivateRoute exact path = "/carlogs" component = {CarLogs}></PrivateRoute>
      <PrivateRoute exact path = "/requests" component = {Requests}></PrivateRoute>
    </Router>
  );
}

export default App;
