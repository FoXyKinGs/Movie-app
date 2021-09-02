const initialState = {
  token: null || localStorage.getItem('token'),
}

const globalReducers = (state = initialState, action) => {
  switch (action.type){
    case "TOKEN_DATA":
      return {...state, token: action.payload}
    default:
      return state
  }
}

export default globalReducers
