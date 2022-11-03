import { createStore } from 'redux'

export const reducer = (state, action) => {

  if(action.type === 'SET_COLOR') {
    return {
      color: action.color
      ...state,
    }
  }

  return {
    ...state
  }
}

const store = createStore(reducer, {
  color: '#000000'
})

export default store
