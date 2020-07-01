import React, { useState } from 'react'

async function login(user, password) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            (user === 'harry')
                ? resolve("_success")
                : reject("_failure")
        }, 2000
        )
    )
}

function useReducer2() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        /*try {
            let result = await login(user, password)
            console.log("try", result)
        } catch (e) {
            console.log(e)
        }*/
        setIsLoading(true)
        login(user, password)
            .then(r =>{ 
                console.log(r) 
                setIsLoading(false) }
            ).catch(e =>{
                setError(true)
                setIsLoading(false)
                }
            )
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <h1>Login Please!</h1>
            {error&&<p>Usuario o Contraseña incorrectos</p>}
            <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="user"></input>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="user"></input>
            <button type="submit" disabled={isLoading}>{isLoading ? 'is Loging...' :'Log In'} </button>
        </form>
    )
}

export default useReducer2
