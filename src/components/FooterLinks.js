import React from 'react'
import { Link } from 'react-router-dom'
import '../components/headerRedes.css'
import '../components/footer.css'

const FooterLinks = () => {
    return (
        <div>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
                <span >INICIO</span>
            </Link> <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
                <span >SERVICIOS</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
                <span >NOTICIAS</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
                <span >GALERIA</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes" >
                <span >CONTÁCTENOS</span>
            </Link>
        </div>
    )
}

export default FooterLinks