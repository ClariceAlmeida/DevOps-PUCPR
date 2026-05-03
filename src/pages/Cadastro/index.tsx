import { useState } from "react"
import firebase from '../../Firebase'


function Cadastro() {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthday, setBirthday] = useState('')
  


  async function handleRegistry(e: React.FormEvent){
    e.preventDefault()

    //validação
    if (!name || !lastName || !password || !email || !birthday) {
      alert("Preencha todos os campos!")
      return
    }

    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password)

      if (result.user) {
        const uid = result.user.uid;

        await firebase.firestore().collection("usuarios").doc(uid).set({
          uid: uid,
          name: name,
          lastName: lastName,
          birthday: birthday,
          email: email,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })

        //feedback para o usuário aqui

        setEmail(""); setPassword(""); setName(""); setLastName(""); setBirthday("");
      }
    } catch (error: any) {
      console.error("Erro no cadastro:", error);
      if (error.code === 'auth/email-already-in-use') {
        alert("Este e-mail já está em uso.");
      } else {
        alert("Erro ao cadastrar: " + error.message);
      }
    }
  }


  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h1>Cadastro</h1>

      <form onSubmit={handleRegistry} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="date" placeholder="Data de Nascimento" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="submit">Cadastrar Usuário</button>
      </form>
    </div>
  )
}

export default Cadastro
