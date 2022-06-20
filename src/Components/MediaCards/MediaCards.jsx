import React from 'react'
import './MediaCards.css'
import Media from '../Media/Media'

function MediaCards(props) {

  let data = props.mediaData
  
  return (
    <div className='container'>
      <div className="row">
        {data.map(media => {
             return <Media key={media.nasa_id} media={media} />
        } )}
      </div>
    </div>
  )
}

export default MediaCards