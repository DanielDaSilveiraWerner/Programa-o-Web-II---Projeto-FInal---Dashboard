import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/dashboard.scss';
import { useEffect, useState } from 'react';
import gremio from "../assets/grêmioFoto.png"

export function TopBar(){
    const [nomeUsuario, setUsuarioEmail] = useState("");
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"));
        if(user){
          setUsuarioEmail(user.name);
        }
      },[]);
    return(
        <nav className="navbar navbar-light bg-white border-bottom px-3" style={{height: "85px"}}>
        <span className="me-03">Olá, {nomeUsuario}</span>
        <img src={gremio} alt="imagemGremio" className='imagemGremio'/>
          <form className="d-flex justify-content-start formPesquisar">
            <input className="form-control me-5" type="search" placeholder="Pesquisar..." />
          </form>
        </nav>
    )
}