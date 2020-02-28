import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../store/actions/actions'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = props => {
  const [form, setForm] = useState({
    user: '',
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
    props.registerRequest(form)
    props.history.push('/')
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            name='user'
            placeholder='Nombre'
            onChange={handleInput}
            type='text'
          />
          <input
            className='input'
            name='email'
            placeholder='Correo'
            onChange={handleInput}
            type='text'
          />
          <input
            className='input'
            name='password'
            placeholder='Contraseña'
            onChange={handleInput}
            type='password'
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register)
