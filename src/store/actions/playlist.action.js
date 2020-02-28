import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  GET_VIDEO_SOURCE
} from '../types.actions'

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload
})

export const deleteFavorite = payload => ({
  type: DELETE_FAVORITE,
  payload
})

export const getVideoSource = payload => ({
  type: GET_VIDEO_SOURCE,
  payload
})
