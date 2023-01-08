import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",
    { headers: { 'Authorization': 'whatever-you-want' },
  })
    .then(res=>{
      setData(res.data.books)
    })
    .catch(err=>{
      console.log("Status Code: "+err.response.status)
      if(err.response.status===404){
        console.log("Website not found")
      }
      else{
        console.log(err)
      }
    })
  },[])

  return (
    <div>
      {data.map((item)=>{
        return(
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div className='flex'>
              <img src={item.imageLinks.smallThumbnail} alt=""></img>
              <p>{item.description}</p>
            </div>
            {item.authors.map((author,index)=>{
              return <span key={index}>{author}</span>
            })}
            <hr></hr>
          </div>
        )
      })}

    </div>
  );
}

export default App;