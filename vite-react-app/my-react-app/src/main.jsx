import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'

import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Hello from MyApp..</h1>
//         </div>
//     )
// }

const anotherElement = (  // work it is a object 
    <a href="https://google.com" target='_blank'>Visite google</a>
)


const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)


createRoot(document.getElementById('root')).render(
    //<MyApp />  // buldller will convert this into key value pair so that it can form tree
    // MyApp()  // altimatlly a javascript function so can be run like function
   
    //anotherElement // works rendering object

    reactElement // work render as object

    // <App/>   the only one element can be pass 

)
