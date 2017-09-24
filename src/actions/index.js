let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setupSwitch = st => {
  return {
    type: 'SETUP_SWITCH',
    st: st ? st == 'on' ? 'off' : 'on' : 'on',
    mode: 0
  }
}

export const setupLoad = () => {
  return {
    type: 'SETUP_LOAD'
  }
}

export const setupColor = color => {
  return {
    type: 'SETUP_COLOR',
    color
  }
}

export const setupBr = br => {
  return {
    type: 'SETUP_BR',
    brightness: br
  }
}

export const setupMode = mode => {
  return {
    type: 'SETUP_MODE',
    mode
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const compliteTodo = id => {
  return {
    type: 'COMPLITE_TODO',
    id
  }
}

export const openTodo = id => {
  return {
    type: 'OPEN_TODO',
    id
  }
}
