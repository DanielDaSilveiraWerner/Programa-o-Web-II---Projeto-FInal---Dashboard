import { use, useState } from "react";
import "../styles/loginStyle.scss";
import meuGestor from "../assets/logo.svg";
import pessoaCelulcar from "../assets/saly-14.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/Facebook.svg";
import { loginAndGetUser } from "../services/auth";
import { useNavigate } from "react-router-dom";



export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

     const navigate = useNavigate();

    async function handleSubmite(e) {
        e.preventDefault();
        if (!email.trim() || !senha.trim()) {
            setError("Preencha todos os campos!");
            return;
        }
        setError(null);
        setLoading(true);
        try {
            await loginAndGetUser({ email, password: senha });
            navigate('/dashboard');
        } catch (err) {
            const apiMsg = err?.response?.data || err?.message || "Falha no login";
            setError(typeof apiMsg === "string" ? apiMsg : "Falha no login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="telaLogin">
            {/* <!-- Div Pai/Principal --> */}
            <div className="imagemCanto">{/* Div filha do pai, que representa a imagem do canto esquerdo da tela de login */}
                <img src={meuGestor} alt="Imagem Logo" />
            </div>
            <div className="textoEImagemLogin"> {/* Div filha do pai, que representa um dos bloco que que tem uma imagem, mais texto */}
        <h1 className="textoFacaLogin">
            Faça seu login em
        </h1>
        <h3 className="textoMeuGestor">
             <span className="spanMeu">Meu</span>
             <span className="spanGestor">Gestor</span>
        </h3>
        <p>
            Se você ainda não tem um conta.<br/>
            Você pode se <span className="spanRegistrarAqui">Registrar aqui !</span> 
        </p>
        <img src={pessoaCelulcar} alt="Imagem Feliz"/>
            </div>
            {/* Div filha do pai, que representa o formulário para login, mais imagens*/}
            <div className="areaDeLogin">
                <h1>
                    Login
                </h1>
                <form onSubmit={handleSubmite}>
                    <input 
                        className="areaDeLogin__inputEmail"
                        type="text"
                        placeholder='    E-mail'
                        name='email'
                        value={email}
                        onChange={(o) => setEmail(o.target.value)} />
                        <br /><br />
                    <input
                        className="areaDeLogin__inputSenha"
                        type="password"
                        name='senha'
                        placeholder='    Senha'
                        value={senha}
                        onChange={(o) => setSenha(o.target.value)}
                    />
                    {error && <p className="form_erorr">{error}</p>}
                    <p className="areaDeLogin__PSenha">
                        Esqueceu sua senha? 
                    </p>
                    <button
                     type='submit'
                        disabled={loading}
                        className="button button --primary"
                    >{loading ? "Entrando..." : "Login"}</button>

                    <p className="areaDeLogin__PContinueCom">
                        ou continue com 
                    </p>
                    <img className="areaDeLogin__imgFace" src={facebook} alt="ImagemFacebook" />
                    <img className="areaDeLogin__imgApple" src={apple} alt="ImagemApple" />
                    <img className="areaDeLogin__imgGoogle" src={google} alt="imagemGoogle" />
                </form>
            </div>
        </div>
    )
}

export default Login;

