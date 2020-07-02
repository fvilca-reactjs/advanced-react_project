import React,{useContext, useEffect, useState} from 'react'
import Context from '../utils/context';
import axios from 'axios'

//Home page
const Home = (props) => {

  console.log("Home: props",props)
  const context = useContext(Context)

  const [data, setData] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios.get(url)
    .then(res=>{const persons = res.data;
      setData(persons)
    })
    return () => {
      
    }
  }, [])
  return(
    <div>
      Home:
      <br/>
      globalValue:{context.globalValue}

      <section>
        {data.map(
          (person)=>
            <ul>
              <li>{person.name}:{person.phone}& {person.website} </li>
            </ul>
        )}
      </section>
    </div>
  )
};

export default Home;
