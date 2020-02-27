import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setFavorite, deleteFavorite } from '../store/actions/actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = props => {
  const { contentRating, cover, duration, title, year, id, isList } = props
  const subtitle = `${year} ${contentRating} ${duration} minutos`

  const handleSetFavorite = () => {
    props.setFavorite({ contentRating, cover, duration, title, year, id })
  }

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id)
  }

  let renderIcon = (
    <img
      className='carousel-item__details--img'
      src={plusIcon}
      alt='Plus Icon'
      onClick={handleSetFavorite}
    />
  )
  if (isList) {
    renderIcon = (
      <img
        className='carousel-item__details--img'
        src={removeIcon}
        alt='Remove Icon'
        onClick={handleDeleteFavorite}
      />
    )
  }
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {renderIcon}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{subtitle}</p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  contentRating: PropTypes.string,
  cover: PropTypes.string,
  duration: PropTypes.number,
  id: PropTypes.number,
  isList: PropTypes.bool,
  title: PropTypes.string,
  year: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem)
