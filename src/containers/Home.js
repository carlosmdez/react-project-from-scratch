import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const Home = () => {
  const videos = useInitialState(API)

  const { mylist, trends, originals } = videos

  let renderMyList = null
  let renderTrends = null
  let renderOriginals = null

  if (mylist.length > 0) {
    renderMyList = (
      <Categories title='Bienvenidos'>
        <Carousel>
          {mylist.map(item => (
            <CarouselItem key={item.id} {...item} />
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
      <Search />
      {renderMyList}
      {renderTrends}
      {renderOriginals}
    </>
  )
}

export default Home
