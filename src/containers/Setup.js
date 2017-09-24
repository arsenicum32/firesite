import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setupSwitch , setupColor , setupBr , setupMode , setupLoad } from '../actions'
import instance from '../helpers/rest'
import { modes } from '../helpers/arch'


const mapStateToProps = state => {
  return {
    st: state.setup.st,
    color: state.setup.color,
    mode: state.setup.mode,
    brightness: state.setup.brightness,
    load: state.setup.load
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStClick: (e) => {
      instance.get( '/'+ e.target.innerHTML )
      .then(e=>   dispatch(setupLoad()) )
      .catch(e=> console.log(e))
      dispatch(setupSwitch(e.target.innerHTML))
    },
    colorPick: e => {
      instance.get( '/on?color='+e.target.value )
      .then(e=> dispatch(setupLoad("good")) )
      .catch(e=> dispatch(setupLoad("bad")) )
      dispatch(setupColor(e.target.value))
    },
    setupMode: e=> {
      instance.get( '/on?mode='+e.target.value )
      .then(e=> dispatch(setupLoad("good")) )
      .catch(e=> dispatch(setupLoad("bad")) )
      dispatch(setupMode(e.target.value))
    },
    brPick: e=> {
      instance.get( '/on?br='+e.target.value )
      .then(e=> dispatch(setupLoad("good")) )
      .catch(e=> dispatch(setupLoad("bad")) )
      dispatch(setupBr(e.target.value))
    }
  }
}

let Setup = ({
  onStClick ,
  st = 'on' ,
  color ,
  brightness ,
  mode ,
  setupMode,
  colorPick,
  brPick,
  load
}) => (
    <div>
      вкл/выкл
      { load? <a href='#' onClick={onStClick}>{st}</a> : void(0) }
      {
        load?
        st=='off'?
        <div>
        <select onChange={setupMode} >
          {
            modes.map( (m , n)=> <option key={n} value={n}>{ m }</option> )
          }
        </select>
        {
          mode==0?
          <div><span style={{color}}>color</span>
            <input type="color" value={color} onChange={colorPick} /> ,
            яркость: <input type="number" step="0.01" min="0" max="1" value={brightness} onChange={brPick} />
          </div>
          :
          <div>список режимов</div>
        }
        </div>
        : void(0) : <div>loading</div>
      }
    </div>
)


Setup = connect(mapStateToProps, mapDispatchToProps)(Setup)

export default Setup
