import { useState } from "react";
import "../styles/loginStyle.scss"
import { loginAndGetUser } from "../services/auth";
import meuGestor from "../assets/logo.svg"
import { useNavigate } from "react-router-dom";

function Login (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
   
    async function handleSubmite (e) {
        e.preventDefault();
        if(!email.trim() || !senha.trim()){
            setError ("Preencha todos os campos");
            return;
        }
        setError(null);
        setLoading(true);
        try {
            await loginAndGetUser({ email, password: senha});
           useNavigate('/dashboard')
        } catch (err) {
            const apiMsg = err?.response?.data || err?.message || "Falha no login";
            setError(typeof apiMsg === "string" ? apiMsg : "Falha no login");
        } finally {
            setLoading(false);
        }
    }   

   
    return (  
        <div className="telaLogin"> 
            <div>
            <img src={meuGestor} alt="Meu Gestor" className="imagemDoCantoEsquerdoDaTelaDeLogin"/>
                <h1 className="facaSeuLoginEm">
                    Faça seu login em 
                </h1>
                <h2 class="MeuGestor">
                    <span className="meu">Meu</span><span className="gestor">Gestor</span>
                </h2>
                <p className="voceNaoPodeSeRegistrarAqui">
                   <span className="vocePodeSe" >Se você ainda não tem uma conta. </span><br/>
                <span className="vocePodeSe"> Você pode se </span> <span class="registrarAqui">Registrar aqui !</span> 
                </p>
                <div>
                    <div>
                        <div>
                            <form onSubmit={handleSubmite}>
                                    <input 
                                    type="text" 
                                    placeholder='Email' 
                                    name='email'
                                    value={email}
                                    onChange={(o) => setEmail(o.target.value)}/>
                                <input 
                                    type="password" 
                                    name='senha' 
                                    placeholder='Senha'
                                    value={senha}
                                    onChange={(o) => setSenha(o.target.value)}
                                />
                                {error && <p className="form_erorr">{error}</p>}


                                <button type='submit'
                                disabled={loading}
                                className="button button --primary"                                
                               >I {loading ? "Entrando..." : "Login"}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>          
        ) 
}

export default Login;