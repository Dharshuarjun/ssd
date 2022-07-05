import React from 'react';
import Dashboard from "./Dashboard";
import User from "./User";
import Createuser from './Createuser';
import Product from "./Product";
import Sidebar from './Sidebar';
import Topbar from "./Topbar";
import {Routes,Route,Outlet} from "react-router-dom";
function Portal() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar/>
          <div className="container-fluid">
            <Outlet/>
            </div>
            </div>
      </div>
 </div>
    
  )
}

export default Portal;