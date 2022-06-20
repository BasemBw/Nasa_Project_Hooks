import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Media.css'


function Media(props) {

    const [islike, setIslike] = useState(false)


    let media = props.media

    useEffect(() => {

        props.media.isFavorites ? setIslike(false) : setIslike(true)

    }, [props.media.isFavorites])

    const handelLike = () => {

        if (media.isFavorites) {

            axios.delete(`http://localhost:7070/Media/Favorites?id=${props.media.nasa_id}`).then(function (response) {

                alert('delete from favorites done!')

            }).catch(function (err) {

                alert('Error While delete!!')
            })

        } else {

            axios.post('http://localhost:7070/Media/Favorites', {
                params: {
                    title: media.title,
                    href: media.href,
                    description: media.description,
                    nasa_id: media.nasa_id,
                    date_created: media.date_created
                }
            })
                .catch(function (error) {
                    alert('Error plz try again!!')
                })

        }

        setIslike(isLike => isLike = !isLike)
    }

    return (
        <Fragment>
            <div className='card col-lg-4 col-md-4 col-sm-6 col-xs-12 deal text-center'>
                <p className='title'>{media.title}</p>
                <Link to={'/Media'} state={{
                    title: media.title,
                    href: media.href,
                    description: media.description,
                    nasa_id: media.nasa_id,
                    isLike: islike,
                    isFavorites: media.isFavorites,
                    date_created: media.date_created
                }} >
                    <img src={media.href} className="imageCard" alt="..." />
                </Link>
                <div className="cardfotter text-center  margin: 20px">
                    <button onClick={handelLike} type="button" className="btn btn-floating outline-dark">
                        <i className={islike ? "bi bi-hand-thumbs-up-fill" : 'bi bi-hand-thumbs-down-fill'}></i>
                    </button>
                </div>
            </div>

        </Fragment >
    )
}

export default Media

