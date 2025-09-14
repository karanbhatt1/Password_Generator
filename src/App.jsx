import { useCallback, useState, useEffect, useRef } from "react";
import Mid from "./Components/Mid"
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState();


  const pasref  = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass  = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "{}[]``!!&*()^%$#_+~`/-"

    for(let i = 1;i<=length;i++){
      let charIndx  = Math.ceil(((Math.random()*str.length) + 1))
      pass += str.charAt(charIndx)
    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  const copytoClipboard = useCallback(()=>{
    pasref.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed, passwordGenerator])


  return (
   <>
   <div className="h-svh w-svw bg-purple-900 flex  flex-col justify-center items-center">
    <h1 className="text-5xl mb-5 text-blue-100 font-bold">Password Generator</h1>
    <Mid 
    ref  = {pasref}
    copytoClipboard = {copytoClipboard}
    password={password}
    length={length}
    setLength={setLength}
    setnumberAllowed ={setnumberAllowed}
    setCharacterAllowed={setCharacterAllowed}/>
   </div>
    
   </>
  )
}
export default App
