import { useState } from 'react';
import './App.css';
import dummyTexts from './data';


function App() {
  const [number,setNumber] = useState(0);
  const [text,setText] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(number)
    if(number > dummyTexts.length){amount = 8}
    if(number <= 0){amount = 1}
    setText(dummyTexts.slice(0,amount))
         
  }
  return (
    <div className='container'>
      <div className='heading'>
           <h2>TIRED OF BORING LOREM IPSUM</h2>
      </div>
    <form onSubmit={handleSubmit} > 
    <label>Paragraphs: </label>
       <input type='number' name='amount' value={number} onChange={(e)=>setNumber(e.target.value)} ></input>
       <button onClick={handleSubmit} type='submit'>Generate</button>   
    </form>
    <article>
      {
        text.map((item,index)=> { 
          return (
            <p className='text'>{item}</p>
          )
        })
      }
    </article>
    </div>
  )
}

export default App;
