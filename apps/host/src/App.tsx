import './App.css'
import { lazy, Suspense } from 'react'

const LoginForm = lazy(async () => import('remote/remote-login'))

function App() {
  return (
    <div>
      <header>My header</header>
      <Suspense fallback="loading...">
        <LoginForm />
      </Suspense>
      <footer>My footer</footer>
    </div>
  )
}

export default App
