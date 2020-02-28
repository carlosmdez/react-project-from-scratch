import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE
} from '../types.actions'
import { initialState } from '../../assets/data/initialState'

const playlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVORITE:
      return { ...state, myList: [...state.myList, payload] }

    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== payload)
      }

    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        user: payload
      }

    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === +payload) ||
          state.originals.find(item => item.id === +payload) ||
          {}
      }

    default:
      return state
  }
}

export default playlistReducer
