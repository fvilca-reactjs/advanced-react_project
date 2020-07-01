import React,{useReducer} from 'react'

const initialState = [
    { name: 'fil', age: '1' },
    { name: 'gerar', age: '2' }
]
const appReducer = (state,{tipo,newdata}) => {
    if(tipo === 'ADD_USER'){
      return [...state, newdata]   
    }
}

function useReducer_() {
    
    const [state,dispatch] = useReducer(appReducer,initialState) 
    
    const addUser=()=>{
        const name = document.getElementById('name').value
        const age = document.getElementById('age').value
        console.log("using usereducer")
        dispatch({
            tipo:'ADD_USER',
            newdata:{name,age}
        })
    }

    return (
        <div>
            <input
                id='name'
                placeholder="name" />
            <input
                id='age'
                placeholder="age" />
            <button onClick={addUser}>Add</button>
            {
                state.map(
                    (user) => <div key={user.age}>{user.name}, {user.age}</div>
                )
            }
        </div >
    )
}

export default useReducer_