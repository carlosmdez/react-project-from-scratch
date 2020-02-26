import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutRequest} from '../store/actions/actions'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const { user } = props

  const handleLogout = () => {
    props.logoutRequest({})
  }

  let renderUser = <img src={userIcon} alt='user' />
  let renderAccount = null
  let renderLogin = (
    <li>
      <Link to='/login'>Iniciar sesión</Link>
    </li>
  )

  if (user.email) {
    renderUser = <img src={gravatar(user.email)} alt={user.email} />
    renderAccount = (
      <li>
        <a href='/'>Cuenta</a>
      </li>
    )
    renderLogin = (
      <li>
        <Link to='#logout' onClick={handleLogout}>
          Cerrar sesión
        </Link>
      </li>
    )
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {renderUser}
          <p>Perfil</p>
        </div>
        <ul>
          {renderAccount}
          {renderLogin}
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  user: state.playlistReducer.user
})

const mapDispatchToProps = {
  logoutRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
