import * as types from '../types'

const main = (state = {
  data: [],
  openedMessage: {}
}, action) => {
  switch (action.type) {
    case types.SET_POSTS:
      return { ...state, data: action.payload }

    case types.OPENED_MESSAGE:
      return { ...state, openedMessage: action.payload }

    default:
      return state
  }
}

export default main
