
import Routes from './routes';
import React,{useState} from 'react'
import Context from './utils/context';


//main app 
function App() {

  const [value, setValue] = useState(8);
  const incrementValue = () => {
    setValue(value+1)
  }
  const decrementValue = () => {
    setValue(value-1)
  }
  
  
  return (
    <div>
      Mi proyecto
      <Context.Provider value={
        {
          globalValue:value,
          incrementGlobalValue:()=>incrementValue(),
          decrementGlobalValue:()=>decrementValue()
        }
      }>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
