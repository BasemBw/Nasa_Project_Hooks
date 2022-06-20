import React from 'react'
import { useLocation , Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function MediaComponent() {

  const params = useLocation()

  const [isLike, setIsLike] = useState()

  useEffect(() => {

    setIsLike(isLike => isLike = params.state.isLike)

  },[params.state.isLike]);

  let data = params.state

  function handelLike() {

    if (data.isFavorites) {

      axios.delete(`http://localhost:7070/Media/Favorites?id=${data.nasa_id}`).then(function (response) {

        alert('delete from favorites done!')

      }).catch(function (err) {

        alert('Error While delete!!')
      })

    } else {

      axios.post('http://localhost:7070/Media/Favorites', {
        params: {
          title: data.title,
          href: data.href,
          description: data.description,
          nasa_id: data.nasa_id,
          date_created: data.date_created
        }
      })
        .catch(function (error) {
          alert('Error plz try again!!')
        })

    }

    setIsLike(isLike => isLike = !isLike)
  }


  return (
    <div className='HomeData'>
      <h1 className='title' >{data.title}</h1>
      <img alt={data.media_type} src={data.href} />
      <p className='explanation'>{data.description}</p>
      <button onClick={handelLike} type="button" className="btn btn-floating outline-dark">
        <i className={isLike ? "bi bi-hand-thumbs-up-fill" : 'bi bi-hand-thumbs-down-fill'}></i>
      </button>
      <Link to='/Favorites'><button type="button" class="btn btn-primary">Back</button></Link>
    </div>
  )
}

export default MediaComponent