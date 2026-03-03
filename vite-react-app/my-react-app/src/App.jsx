import { useState } from 'react'
import Chai  from './hello'

function App() {
  const [count, setCount] = useState(0)

  const user = "Vasundhara"

  return (
    
    <>
    <p>hello {user}</p>
    <Chai/>
    </>
  )
}

export default App
