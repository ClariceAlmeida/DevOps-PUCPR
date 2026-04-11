import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const confirmedData = {
    email: 'eduardo.lino@pucpr.br',
    password: '123456'
  }

  function handleLogin() {
    console.log(email, password)
    const msg = document.getElementById('msg')
    if (!msg) return
    if (email === confirmedData.email && password === confirmedData.password) {
      msg.textContent = 'Acessado com sucesso!'
    } else {
      msg.textContent = 'Usuário ou senha incorretos!'
    }
  }

  return (
    <div className="App1">
      <h1>Login</h1>
      <input type="email" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Acessar</button>
      <p id='msg'></p>
    </div>
  )
}

export default App


