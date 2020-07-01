import React,{useState} from 'react'

const initialState = [
    { name: 'fil', age: '1' },
    { name: 'gerar', age: '2' }
]

function probandoUseReducer() {

    const [users, setUsers] = useState(initialState)

    const addUser = () => {
        const name = document.getElementById('name').value
        const age = document.getElementById('age').value
        setUsers([...users, { name, age }])
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
                users.map(
                    (user) => <div key={user.age}>{user.name}, {user.age}</div>
                )
            }
        </div >
    )
}

export default probandoUseReducer