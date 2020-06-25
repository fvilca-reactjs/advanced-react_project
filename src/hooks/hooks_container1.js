import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer_ from '../store/hooks_state/hooks_reducer'
import * as Actions from '../store/actions/actions'

function HooksContainer1() {


  //+++++++++++++ state
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)
  const [state, dispatch] = useReducer(Reducer_.HooksReducer, Reducer_.initialState)
  const testHook = (useEffectValue) ? useEffectValue : 'espera 3 segundos'

  //+++++++++++++ methods
  const incrementValue = (factor) => {
    setValue(stateValue + factor)
  }
  useEffect(() => {
    setTimeout(() => setUseEffectValue("El componente se ha montado"), 3000
    )

  }, [stateValue])
  const changeUseEffectValue = () => {
    setUseEffectValue("some string")
  }
  
  const handleDispatchTrue = () => {
    dispatch(Actions.success())
  }
  const handleDispatchFalse = () => {
    dispatch(Actions.failure())
  }

  return (
    <div>
      local State : {stateValue}
      <button onClick={() => incrementValue(1)}>Increment</button>
      <button onClick={() => incrementValue(-1)}>Decrement</button>
      <button onClick={() => changeUseEffectValue()}>change</button>
      <button onClick={() => handleDispatchTrue()}>change By Reducer True</button>
      <button onClick={() => handleDispatchFalse()}>change By Reducer False</button>
      {state.steteprop1
        ? <p>the state prop is true</p>
        : <p>the state prop is false</p>
      }
      <p>{testHook} </p>
    </div>
  )
}


export default HooksContainer1;
