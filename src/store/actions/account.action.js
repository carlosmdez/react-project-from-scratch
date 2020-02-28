import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST
} from '../types.actions'

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload
})

export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload
})

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload
})
