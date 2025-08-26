import { useState } from "react";
import "../styles/loginStyle.scss"

//   export function Login(){
//     const [login, setLogin] = useState('');
//     const [senha, setSenha] = useState ('');
//   }

function Login (){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmite(e){
        e.preventDefault();
        console.log("Login", login, "Senha", senha);
    }
    return (
        <form onSubmit={handleSubmite}>
            <input 
                type="text" 
                placeholder='Login' 
                name='login'
                value={login}
                onChange={(o) => setlogin(o.target.value)}/>
            <input 
                type="password" 
                name='senha' 
                placeholder='Senha'
                value={senha}
                onChange={(o) => setSenha(o.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
        ) 
}

export default Login;