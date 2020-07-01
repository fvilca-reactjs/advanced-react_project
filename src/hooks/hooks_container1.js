import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer_ from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'

function HooksContainer1() {
  //+++++++++++++ state
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer_.HooksReducer, Reducer_.initialState)

  const testHook = (useEffectValue) ? useEffectValue : 'espera 3 segundos'

  const context = useContext(Context)

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
    //dispatch(ACTIONS.success())
    dispatch({
      type: "SUCCESS"
    })
  }
  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure())
  }

  return (
    <div>
     
      <button onClick={() => incrementValue(1)}>Increment</button>
      <button onClick={() => incrementValue(-1)}>Decrement</button>
      <button onClick={() => changeUseEffectValue()}>change</button>
      <button onClick={() => handleDispatchTrue()}>change By Reducer True</button>
      <button onClick={() => handleDispatchFalse()}>change By Reducer False</button>
      <button onClick={() => context.incrementGlobalValue()}>Global Increment</button>
      <button onClick={() => context.decrementGlobalValue()}>Global Decrement</button>
      <br/>
      local State : {stateValue} <br/>
      {state.stateprop1 //error: puse stete y no me dio error
        ? <p>the state prop is true</p>
        : <p>the state prop is false</p>
      }
      <p>{testHook} </p><br/>
    <p>Global State: {context.globalValue}</p>
    </div>
  )
}


export default HooksContainer1;
