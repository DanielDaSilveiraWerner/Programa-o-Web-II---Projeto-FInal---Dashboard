import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/dashboard.scss'
import meuGestor from "../assets/logo.svg";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';
import Sidebar from '../componentes/Sidebar';
import { TopBar } from '../componentes/TopBar';


export function Dashboard() {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <Sidebar/>

      {/* Área principal */}
      <div className="flex-grow-1">
        
         {/* <TopBar/> */}
          <TopBar/> 
        
      </div>
    </div>
  );
}

