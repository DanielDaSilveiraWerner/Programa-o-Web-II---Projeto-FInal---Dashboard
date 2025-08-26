import { useState } from 'react'

  export function Login(){
    const [login, setLogin] = useState ('');
    const [senha, selSenha] = useState ('');
  }



return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Login' 
            name='login'
            value={login}
            onChange={(o) => setlogin(o.target.value)}/>
        <input 
            type="passaword" 
            name='senha' 
            placeholder='Senha'
            value={senha}
            onChange={(o) => setSenha(o.target.value)}
        />
        <button type='submit'>Login</button>
    </form>
    ) 
