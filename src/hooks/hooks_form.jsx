import React, { useState, useReducer } from 'react'
import * as Reducer from '../store/hooks_state/form_reducer'

function HooksForm() {

    const [valueState, setValueState] = useState()
    const [valueStateSubmit, setValueStateSubmit] = useState()
    const handleChange = (evt) => {
        setValueState(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setValueStateSubmit(evt.target.input.value)
    }
    /************************************************/
    const [state, dispatch] = useReducer(Reducer.InputReducer, Reducer.initialState)

    const handleReducerChange = (evt) => {
        dispatch({ type: 'INPUT_CHANGE', input: evt.target.value })
    }
    const handleReducerSubmit = (evt) => {
        evt.preventDefault()
        dispatch({ type: 'INPUT_SUBMIT', input: evt.target.input_change.value })
    }

    console.log('reducer:',state)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id='input' value={valueState} onChange={handleChange} />
                <button>UseState</button>
            </form>

            <form onSubmit={handleReducerSubmit}>
                <input type="text"  id='input_change' value={state.input_change} onChange={handleReducerChange} />
                <button>useReducer</button>
            </form>

            <section>
                <h1>Use State:</h1>
                <p>change: {valueState}</p>
                <p>submit: {valueStateSubmit} </p>

                <h1>Use Reducer:</h1>
                <p>change: {state.input_change}</p>
                <p>submit: {state.input_submit}</p>
            </section>
        </div>
    )
}

export default HooksForm