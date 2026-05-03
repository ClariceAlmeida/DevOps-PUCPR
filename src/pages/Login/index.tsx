import { useState } from 'react'
import './Login.css'
import firebase from '../../Firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleNewRegistry(){
        window.location.href = "/cadastro"
    }



    async function handleLogin() {
        // validação
        if (!email || !password) {
        alert("Preencha todos os campos!");
        return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)

            // feedback para o usuário aqui
            window.location.href = "/home"

        } catch (error: any) {
        console.error("Erro no login:", error);

        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            alert("E-mail ou senha incorretos.");
        } else if (error.code === 'auth/invalid-email') {
            alert("Formato de e-mail inválido.");
        } else {
            alert("Erro ao acessar: " + error.message);
        }
        }
    }

    return (
        <div className="app1">
            <h1>Login</h1>
            <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Acessar</button>

            <button onClick={handleNewRegistry}> Novo Cadastro </button>
        </div>
    )
}

export default Login