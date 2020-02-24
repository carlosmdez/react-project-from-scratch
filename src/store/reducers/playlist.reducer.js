import { SET_FAVORITE, DELETE_FAVORITE } from '../types.actions'
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

    default:
      return state
  }
}

export default playlistReducer
