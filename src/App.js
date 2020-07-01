
import Routes from './routes';
import React, { useState, useReducer } from 'react'
import Context from './utils/context';
import * as Reducer from './store/hooks_state/form_reducer'

//main app 
function App() {

  const [value, setValue] = useState(8);
  const incrementValue = () => {
    setValue(value + 1)
  }
  const decrementValue = () => {
    setValue(value - 1)
  }

  const [state, dispatch] = useReducer(Reducer.InputReducer, Reducer.initialState)
  
  const handleContextChange = (evt) => {
    dispatch({ type: 'INPUT_CHANGE', input: evt.target.value })
}
const handleContextSubmit = (evt) => {
    evt.preventDefault()
    dispatch({ type: 'INPUT_SUBMIT', input: evt.target.input_change.value })
}  


  return (
    <div>
      Mi proyecto
      <Context.Provider value={
        {
          globalValue: value,
          incrementGlobalValue: () => incrementValue(),
          decrementGlobalValue: () => decrementValue(),

          contextInputChange: state.input_change,
          contextInputSubmit: state.input_submit,
          contextHandleChange: (evt)=>handleContextChange(evt),
          contextHandleSubmit: (evt)=>handleContextSubmit(evt),

        }
      }>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
