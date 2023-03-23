import React from 'react'
import './movieContent.css'
import CancelIcon from '@material-ui/icons/Cancel';

export default function modal({movie}) {
    return (
        <div className='modal--window' >
            <CancelIcon className='modal--close'/>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='modal--img'/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
        )
    }
