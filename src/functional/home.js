import React,{useContext} from 'react'
import Context from '../utils/context';

//Home page
const Home = (props) => {

  console.log("Home: props",props)
  const context = useContext(Context)

  return(
    <div>
      Home:
      <br/>
      globalValue:{context.globalValue}
    </div>
  )
};

export default Home;
