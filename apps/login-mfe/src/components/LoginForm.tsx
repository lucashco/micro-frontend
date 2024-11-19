import './styles.css'

function LoginForm() {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <div className='form-control'>
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm;