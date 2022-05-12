import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Header from './Header';
const axios = require('axios');

function App() {

  let [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setData(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  
    
  }, [])
  
  return (
    <div className="App">
      <Header/>
      {
        data.map((item,i)=>{
          return(
            <div className='table_border'>
              <div>
                <img src={item.image} />
              </div>
              <div>
                <h1>Name : {item.name}</h1>
              </div>
              <div>
                <h3>{item.status}-{item.species}</h3>
              </div>
              <div>
                <p>Last known location:</p>
                <p>{item.location.name}</p>
              </div>
              <div>
                <p>First seen in:</p>
                <p>{item.origin.name}</p>
              </div>
              
            </div>
           
          )
        })
      }
    </div>
  );
}

export default App;
