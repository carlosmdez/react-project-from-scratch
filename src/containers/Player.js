import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../store/actions/actions'

import NotFound from './NotFound'
import '../assets/styles/components/Player.scss'

const Player = props => {
  const { id } = props.match.params
  const { playing } = props
  const hasPlaying = Object.keys(playing).length > 0

  useEffect(() => {
    props.getVideoSource(id)
  }, [])

  if (!hasPlaying) {
    return <NotFound />
  }

  return (
    <div className='player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  playing: state.playlistReducer.playing
})

const mapDispatchToProps = {
  getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
