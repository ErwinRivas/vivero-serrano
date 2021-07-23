import React from 'react'
import './headerRedes.css'
import { Link } from 'react-router-dom';

const HeaderRedes = () => {
    return (
        <nav className="navHeaderRedes">
            <Link to='/vivero-serrano' className="linkHeaderRedes">
            <i class="fas fa-map-marker-alt"></i> { }
                Coop. un techo para los pobres
            </Link>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
            <i class="fab fa-whatsapp"></i> { }
                091-236 5478
            </Link>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
            <i class="far fa-envelope"></i> { }
                laflordeloto@hotmail.com
            </Link>
            <div>
            <Link to='/vivero-serrano'>
            <i class="fab fa-facebook-square   fabColor"></i>
            </Link>
            <Link to='/vivero-serrano'>
            <i class="fab fa-instagram-square fabColor"></i>
            </Link>
            <Link to='/vivero-serrano'>
            <i class="fab fa-twitter-square fabColor"></i>
            </Link>
            </div>
        </nav>
    )
}

export default HeaderRedes