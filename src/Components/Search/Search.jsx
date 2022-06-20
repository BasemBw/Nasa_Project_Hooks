import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'
import MediaCards from '../MediaCards/MediaCards'

function Search() {
    
    const [text , setText] = useState('')

    const [mediaData , setMediaData] = useState([])

    const handelChange = (event) => {
        let value = event.target.value
        setText(text  =>  text = value )
    }

    const handelclick = async () => {

        if(text.trim() === '') { return alert("Please Fill search field") }
         
        axios.get(`http://localhost:7070/Media?value=${text}`).then(function(response){

            setMediaData(response.data)

        }) 

    }

    return (
        <div className='Search'>
            <div className="row height d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="search">
                        <input type="text" onChange={handelChange} className="form-control" placeholder="SEARCH THE UNIVERSE" />
                        <button onClick={handelclick} className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
            <div className='MediaCards d-flex justify-content-center'>
                 {mediaData.length !== 0 ? <MediaCards mediaData={mediaData} /> : null }
            </div>
        </div>
    )
}

export default Search