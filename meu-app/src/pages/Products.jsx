import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/dashboard.scss'
import Sidebar from '../componentes/Sidebar';
import { TopBar } from '../componentes/TopBar';
import { Tabela } from '../componentes/TabelaProdutos';

export function Products(){
    return (
        <div className="d-flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Área principal */}
      <div className="flex-grow-1">
        
         {/* <TopBar/>*/}
          <TopBar/> 

        {/* Tabela de Produtos */}
            <Tabela/>
      </div>
    </div>
    )
}