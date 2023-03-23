import React, {useState} from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Modal from "react-modal";
import MovieContent from "./movieContent.js"
import './movieRow.css';

export default ({title, items}) => {
    const [scrollx, setScrollx] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [movieSelect, setMovieSelect] = useState([])

    function handleModal(movie){
        setIsOpen(!isOpen);
        let list = movie
        setMovieSelect(list)
    }

    function closeModal(){
        setIsOpen(false);
    }

    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth/2);
        if(x > 0){
            x = 0;
        }
        setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth/2);
        let listW = items.results.length * 125;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW);
        }
        setScrollx(x);
    }

    return(
        <div className="lista">
            <h2>{title}</h2>
            
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 125
                    }}>
                    {items.results.length > 0 && items.results.map((item, key) =>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} onClick = {() => handleModal(item)}/>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen = {isOpen}
                onRequestClose = {closeModal}
                contentLabel= "aaaaa"
                overlayClassName= "modal-overlay"
                className= "modal-content"
            >
                <MovieContent movie={movieSelect} onClick = {() => closeModal()}/>
            </Modal>
            {/* <Modal isOpen={isOpen} movie={movieSelect}/> */}
        </div>
    )
}