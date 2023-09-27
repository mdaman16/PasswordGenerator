import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(0);
  const[number,setNumber]= useState(false);
  const[character,setCharacter]= useState(false);
  const[password,setPassword]= useState("");
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let index = 1; index <= length; index++) {
      let generatedPassword = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(generatedPassword);
    
      
    }
    setPassword(pass)
  },[length,number,character,setPassword])
   
  useEffect(()=>{
    passwordGenerator();
  },[length,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto px-4 text-orange-500 bg-gray-500 rounded-lg'>
      <h1 className='text-white text-center my-5'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
        <button className='outline-none bg-blue-400 text-white'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setLength(e.target.value)}}
          />
          <label > Length : {length}</label>
        </div>
      </div>
    </div>

  )
}

export default App
