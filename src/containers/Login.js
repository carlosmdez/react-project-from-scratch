import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../store/actions/actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = props => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleInput = event => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            name='email'
            type='text'
            onChange={handleInput}
            placeholder='Correo'
          />
          <input
            className='input'
            name='password'
            type='password'
            onChange={handleInput}
            placeholder='Contraseña'
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  loginRequest
}

export default connect(null, mapDispatchToProps)(Login)
