import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/dashboard.scss'
import meuGestor from "../assets/logo.svg";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';

export function Dashboard() {
  const [emailUsuario, setUsuarioEmail] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const email = sessionStorage.getItem("setUsuarioEmail");
    if(email){
      setUsuarioEmail(email);
    }
  },[]);

  function sair (){
    logout();
    navigate("/login")
  }

  function levarAProducts(){
    navigate("/products")
  }


  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div className="bg-light border-end vh-100 p-3 textoSidebar" style={{width: "240px", height: "940px"}}>
        <img className='imagemCanto' src={meuGestor} alt="imagemMeuGestor"/>
        <h4 className="mb-4">Menu</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vendas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={levarAProducts}>Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Materiais</a>
          </li>
          <hr />
          <h4>Outros</h4>
          <li className="nav-item">
            <a className="nav-link  " href="#">Configurações</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="#">Usuários</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="#">Empresas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={sair}>Sair</a>

          </li>
        </ul>
      </div>

      {/* Área principal */}
      <div className="flex-grow-1">
        
        {/* Topbar */}
        
        <nav className="navbar navbar-light bg-white border-bottom px-3" style={{height: "85px"}}>
        <span className="me-03">Olá, {emailUsuario}</span>
          <form className="d-flex justify-content-start formPesquisar">
            <input className="form-control me-5" type="search" placeholder="Pesquisar..." />
          </form>
          
        </nav>
      </div>
    </div>
  );
}
