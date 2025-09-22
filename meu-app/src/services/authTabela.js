import {apiTabela} from "../apiTabela";

export async function getProdutos() {
    try{
        const response = await apiTabela.get("/products");
        return response.data;
    } catch(error){
        console.error("Erro ao buscar o produto", error);
        throw error;
    }
}


