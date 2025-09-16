import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/dashboard.scss';
import meuGestor from "../assets/logo.svg";
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';


export function Sidebar() {
  const navigate = useNavigate();
    function sair() {
        logout();
        navigate("/login")
    }

    function levarAProducts() {
        navigate("/products")
    }

    return (
        <div className="bg-light border-end vh-100 p-3 textoSidebar" style={{ width: "240px", height: "940px" }}>
            <img className='imagemCanto' src={meuGestor} alt="imagemMeuGestor" />
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
                    <a className="nav-link" href="#">Configurações</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Usuários</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Empresas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={sair}>Sair</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;