import React from 'react'
import Footer from './Footer'
import Intro from '../containers/Intro'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/test.styl'


//console.log(styles);

const App = () => (
  <div>
    {
      // <AddTodo />
      // <Footer />
    }
    <Intro />
    <VisibleTodoList />
  </div>
)

export default App
