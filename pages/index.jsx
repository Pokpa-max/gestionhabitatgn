import { useUser, withUser, withUserTokenSSR } from 'next-firebase-auth'

import HomePage from './home'
import { useState } from 'react'

function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}

export const getServerSideProps = withUserTokenSSR({
  whenUnauthed: useUser.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  return {
    props: {},
  }
})
export default withUser({
  whenUnauthedAfterInit: useUser.REDIRECT_TO_LOGIN,
})(Home)

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.')
    } else {
      setError('')
      console.log('Email:', email)
      console.log('Mot de passe:', password)
      // Vous pouvez ajouter ici la logique d'authentification
    }
  }

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  )
}
