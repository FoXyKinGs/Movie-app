const initialState = {
  token: null || localStorage.getItem('token'),
  id: null || localStorage.getItem('id')
}

const globalReducers = (state = initialState, action) => {
  switch (action.type){
    case "TOKEN_DATA":
      return {...state, token: action.payload}
    case "ID_DATA":
      return {...state, id: action.payload}
    default:
      return state
  }
}

export default globalReducers
