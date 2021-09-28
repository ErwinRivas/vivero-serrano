import React from 'react'
import './headerRedes.css'
import { Link } from 'react-router-dom';


const LinkRedesDir = () => {
    return(
        <Link to='/vivero-serrano' className="linkHeaderRedes">
        <i className="fas fa-map-marker-alt"></i> { }
            Coop. un techo para los pobres
        </Link>
    )
}

export default LinkRedesDir