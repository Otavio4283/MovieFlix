import React from 'react'
import './movieContent.css'
import CommentIcon from '@material-ui/icons/Comment';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function modal({movie}) {
    return (
        <div className='modal--window' >
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='modal--img'/>
            <h2>{movie.title}{movie.name}</h2>
            <p>{movie.overview}</p>
            <div className='modal--links'>
                <button className='modal--button'>Relacionados</button>
                <div className='modal--icons'>
                    <CommentIcon />
                    <StarBorderIcon />
                    <AddCircleOutlineIcon />
                </div>
            </div>
        </div>
        )
    }
