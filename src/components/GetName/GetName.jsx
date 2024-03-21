import { useEffect, useState } from "react";
import "./GetName.css"
import { getAlphabet } from "../../utils/getAlphabet";

const GetName = () => {
  const [input, setInput] = useState()

  useEffect(() => {
    let textArea = document.getElementById("inputBox")
    if (input) {
      for (let i = 0; i < input.length; i++) {
        console.log(input[i])
        textArea.value += getAlphabet(input[i])
      }
    }
  }, [input])

  return (
    <div>
      <input type="text" name="" id="inputTag" onChange={ (e) => setInput(e.target.value) } />
      <button id="print-btn">PRINT</button>
      <textarea rows="10" cols="100" name="" id="inputBox" />
    </div>
  )
}

export default GetName