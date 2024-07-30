import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [roomID,setRoomID]=useState("")
const navigate=useNavigate()

const handleClick=()=>{
    if(roomID){
        navigate(`/room/${roomID}`)
    }
}
  return (
    <div className='w-screen min-h-screen bg-gray-800 flex items-center justify-center'>
        <div className='w-[400px]'>
            <h1 className='text-4xl mb-4 text-white font-bold text-center'>
                Hey! Welcome
            </h1>
            <input onChange={(e)=>setRoomID(e.target.value)} value={roomID} type="text" placeholder='Enter Room ID' className='border-2 w-full border-white rounded-lg mb-4 focus:none px-4 py-3 text-xl'/>
            <button onClick={handleClick} className='bg-blue-500 w-full rounded-lg block px-5 py-3 text-lg text-white'>Join Room</button>
        </div>
    </div>
  )
}

export default Home