import { useEffect, useState } from "react"
import firebase from '../../Firebase'

function Home() {
    const [userProfile, setUserProfile] = useState<any>(null)
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.firestore().collection('usuarios').doc(user.uid).get()
                    .then((doc) => {
                        if (doc.exists) {
                            setUserProfile(doc.data())
                        }
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log("Erro ao buscar dados:", error)
                        setLoading(false)
                    })
            } else {
                setLoading(false)
            }
        })

        return () => unsub() 
    }, [])

    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>Bem-vindo, {userProfile?.name} {userProfile?.lastName}</h1>
            
            {userProfile && (
                <div>
                    <p>E-mail: {userProfile.email}</p>
                    <p>Nascimento: {userProfile.birthday}</p>
                </div>
            )}
        </div>
    )
}

export default Home