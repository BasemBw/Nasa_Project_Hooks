import React , { useState ,useEffect } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {
  
  const [data , setData] = useState({})  

  useEffect(()=> {
    
         const getDataFunction = async ()=>{
              let PictureOfTheDay = await axios.get(`http://localhost:7070/Media/APOD`) 
              await setData({...PictureOfTheDay.data})
         }

         getDataFunction()
  },[])

  return (
    <div className='HomeData'>
        <h1 className='title' >{data.title}</h1>
        <img alt={data.media_type} src={data.href}  />
        <p className='explanation'>{data.description}</p>
    </div>
  )
}

export default Home