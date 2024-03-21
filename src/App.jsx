import { useEffect } from 'react'
import './App.css'
import { drawA } from './utils/alphabets'

function App() {
  useEffect(() => {
    document.getElementById("input").value = drawA(10)
  }, [])
  return (
    <div>
      <textarea rows="10" cols="100" name="" id="input" />
    </div>
  )
}

export default App
