import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  return (
    <>
     {/* pass text as a prop to the Greetings function */}
     <Greeting text="Hello to the world of react"/>
    </>
  )
}

export default App
