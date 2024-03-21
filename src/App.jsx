import { useEffect } from 'react'
import './App.css'
import { drawA } from './utils/alphabets'

function App() {
  useEffect(() => {
    let textArea = document.getElementById("input")
    textArea.value = drawA(10)
    textArea.style.height = (25 + textArea.scrollHeight) + "px";
    textArea.style.width = (25 + textArea.scrollWidth) + "px";
  }, [])
  return (
    <div>
      <textarea rows="10" cols="100" name="" id="input" />
    </div>
  )
}

export default App
