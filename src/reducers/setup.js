/*

modes:

0 - ручной режим

*/

let iState = {
  st: "on",
  mode: 0,
  color: "#ffffff",
  brightness: 1,
  load: true
}

const setup = (state  = iState , action) => {
  switch (action.type) {
    case 'SETUP_SWITCH':
      return { ...state , st: action.st , mode : 0 , load: false }
    case 'SETUP_MODE':
      return { ...state , mode: action.mode , load: false }
    case 'SETUP_COLOR':
      return { ...state , color: action.color , load: false }
    case 'SETUP_BR':
      return { ...state , brightness: action.br , load: false }
    case 'SETUP_LOAD':
      return { ...state , load: true }
    default:
      return state
  }
}

export default setup
