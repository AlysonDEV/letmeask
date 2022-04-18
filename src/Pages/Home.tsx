import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'

import illustrationImg from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconLogo from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import {  auth, firebase } from '../services/firebase'

export function Home() {
  const navigate = useNavigate()

  function handleCreateRoom () {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(
      result => {
        console.log(result)
        navigate('/rooms/new')
      }
    )


  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask logo" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconLogo} alt="Logo do Google" /> 
            Crie sua sala com o Google
          </button>
          <div className="separetor">
            ou entre em uma sala
          </div>
          <form action="">
            <input 
              type="text" 
              placeholder='Digete o código da sala'
            />
            <Button type="submit" >Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}