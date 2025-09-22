import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import '../styles/products.scss';
import { getProdutos } from '../services/authTabela';

export function Tabela() {
  const [produtos, setProdutos] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            try{
                const data = await getProdutos();
                setProdutos(data);
            } catch(error){
                console.log("Não foi possível carregar os produtos :(")
            }
        }
        fetchData();
    }, []);
    
  return (
    <div className="d-flex">

      <div className="flex-grow-1 p-4">

        <h2 className="tituloProduto mt-4">Produtos</h2>

        <table className="tabelaToda table table-bordered mt-3">
          <thead className="table-secondary">
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Marca</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {produtos.length > 0 ? (
              produtos.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>R$ {p.price}</td>
                  <td>{p.brand}</td>
                  <td>{p.expirationDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
