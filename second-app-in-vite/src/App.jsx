import { useState } from 'react'
import './App.css'
import Card from './componant/Card'

function App() {
  //const [count, setCount] = useState(0)

  let [count1,setmyCounter]=useState(15)

  const removevalue = ()=>{
    console.log("value remove ",);
    if (count1>=0)
      {
      count1 =count1-1 
      setmyCounter(count1)
    }
    
  }

  //let count1=5;
  const addvalue = () =>{
    // console.log("value added",count1=count1+1);
    console.log("value added",count1);
    if (count1<=10){
      count1=count1+1
      setmyCounter(count1)
    }
    
  }

   let user={
    name:"hello",
    age:30
  }
  let newarry =[1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black rounded'>Learning react</h1>
     <h1>Add Decrease counter</h1>
     <h1>now counter {count1}</h1>
     <button
     onClick={addvalue}>Add value {count1}</button>
     <br/>
     <button
     onClick={removevalue}>Decrease value {count1}</button>

     <footer>{count1}</footer>

    
     <Card username="mywork" myinfo={newarry} />
   
    
    </>
  )
}
 /* <Card channel="mywork" myinfo={user} arraysend={newarry}/> */
export default App
