import * as types from '../types'

export const setData = (data) => ({
  type: types.SET_POSTS,
  payload: data
})

export const setMessage = (data) => ({
  type: types.OPENED_MESSAGE,
  payload: data
})
