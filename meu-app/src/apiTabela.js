import axios from "axios";

export const apiTabela = axios.create({
    baseURL: "https://api-node-test-6c4b0a5d4c87.herokuapp.com"
});

apiTabela.interceptors.request.use((config) => {
    const t = sessionStorage.getItem("token");
    if (t) config.headers.Authorization = `Bearer ${t}`;
    return config;
});