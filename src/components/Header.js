import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const {user} = props
  let renderUser = <img src={userIcon} alt='user' />
  if(user.email){
    const gravatarLink = gravatar(user.email)
    renderUser = <img src={gravatarLink} alt={user.email} />
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
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <Link to='/login'>Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.playlistReducer.user
})

export default connect(mapStateToProps, null)(Header)
