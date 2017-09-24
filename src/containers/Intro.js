import React from 'react'
import { connect } from 'react-redux'
import '../styles/intro.styl'


let Intro = ()=>{
  return (
    <div className='intro'>
      <h1>hello test</h1>
      <p>внимание: не перезагружайте эту страницу!</p>
    </div>
  )
}

Intro = connect()(Intro)

export default Intro
