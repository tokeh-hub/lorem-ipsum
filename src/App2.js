import { useState} from 'react';
import './App.css';

function App() {
  const [number,setNumber] = useState(0);
  const [text,setText] = useState([])
  const[loading,setLoading] = useState(false)

  const someFunction = async () =>{
    const response = await fetch(`https://veli-cors.glitch.me/text-gen?length=${number <= 0 ? null : number }`, {
      mode: "cors"
     })
    const data = await response.json()
    const main = data.text.split('\n\n')
    setText(main)
  }

  // useEffect(()=> someFunction(),[])

  console.log(text)
  
  const handleSubmit = (event) => {
  event.preventDefault();
    setLoading(true)
    someFunction()
    setLoading(false)
  
  }
  
  
  
  return (
    
      <div className='container'>
        <div className='heading'>
             <h2>TIRED OF BORING LOREM IPSUM</h2>
        </div>
      <form onSubmit={handleSubmit} > 
      <label>Paragraphs: </label>
         <input type='number' name='amount' min = "0" value={number} onChange={(e)=>setNumber(e.target.value)} ></input>
         <button onClick={handleSubmit} type='submit'>Generate</button>   
      </form>
      {loading &&
        <div className='loading'>
               <h2>Loading...</h2>
        </div>
        }
      <article>
        {
          text.map((item,index)=> { 
            return (
              <p key={index} className='text'>{item}</p>
            )
          })
        }
      </article>
      </div>
    )
  }
  


    // <form onSubmit={handleSubmit}>
    //   <label>Length: </label>
    //   <input type='number' name='length' ></input>
    //   <button type='submit'>Submit</button>
    // </form>
  

  // let formData = new FormData()
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <form > 
  //         <label>length of paragraphs </label>
  //         <input type='number'></input>
  //       </form>
  //     </header>
  //   </div>
  // );


export default App;
