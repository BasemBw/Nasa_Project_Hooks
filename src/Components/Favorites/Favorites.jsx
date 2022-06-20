import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Media from '../Media/Media'
import './Favorites.css'

function Favorites() {

  const [Favorites , setFavorites] = useState([])

  useEffect(()=>{

        axios.get(`http://localhost:7070/Media/Favorites`).then(function(response){

          setFavorites(Favorites => Favorites = [...response.data])

      })  

  },[])

  return (
    <div className='container'>
      <div className="row">
        {Favorites.map(media => {
             return <Media key={media.title} media={media} />
        } )}
      </div>
    </div>
  )
}

export default Favorites