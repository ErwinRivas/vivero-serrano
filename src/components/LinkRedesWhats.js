import React from 'react'
import './headerRedes.css'
import { Link } from 'react-router-dom';


const LinkRedesWhats = () => {
    return(
        <Link to='/vivero-serrano' className="linkHeaderRedes" >
        <i className="fab fa-whatsapp"></i> { }
            091-236 5478
        </Link>
    )
}

export default LinkRedesWhats