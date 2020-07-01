const estadoInicial = {
    usuario: [],
  };
  export default usuario = (state = estadoInicial, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, usuario: action.login};
      default:
        return state;
    }
  };
  