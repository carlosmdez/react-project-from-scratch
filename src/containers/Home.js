import React from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

const Home = props => {
  const { myList, trends, originals } = props
  let renderMyList = null
  let renderTrends = null
  let renderOriginals = null

  if (myList.length > 0) {
    renderMyList = (
      <Categories title='Bienvenidos'>
        <Carousel>
          {myList.map(item => (
            //TODO: Create a unique key instead a random number.
            <CarouselItem key={Math.random()} isList {...item} />
          ))}
        </Carousel>
      </Categories>
    )
  }

  if (trends.length > 0) {
    renderTrends = (
      <Categories title='Bienvenidos'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    )
  }

  if (originals.length > 0) {
    renderOriginals = (
      <Categories title='Bienvenidos'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    )
  }
  return (
    <>
      <Search isHome />
      {renderMyList}
      {renderTrends}
      {renderOriginals}
    </>
  )
}

const mapStateToProps = state => {
  const { myList, trends, originals } = state.playlistReducer
  return { myList, trends, originals }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Component Name)
export default connect(mapStateToProps, null)(Home)
