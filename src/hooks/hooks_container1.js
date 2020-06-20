import React from 'react';

function HooksContainer1() {

  const [stateValue, setValue] = React.useState(0)
  const [useEffectValue, setUseEffectValue] = React.useState(null)

  const incrementValue = (factor) => {
    setValue(stateValue + factor)
  }

  React.useEffect(() => {
    setTimeout(
      ()=>setUseEffectValue("El componente se ha montado"),3000
    )
    
  }, [])

  const testHook = (useEffectValue)? useEffectValue: 'espera 3 segundos'
  
  return (
    <div>
      local State : {stateValue}
      <button onClick={() => incrementValue(1)}>Increment</button>
      <button onClick={() => incrementValue(-1)}>Decrement</button>

      <p>{testHook} </p>
    </div>
  )
}


export default HooksContainer1;
