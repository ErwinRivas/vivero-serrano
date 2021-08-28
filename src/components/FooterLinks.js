import React from 'react'
import { Link } from 'react-router-dom'
import '../components/headerRedes.css'
import '../components/footer.css'

const FooterLinks = () => {
    return (
        <div className="contenedorLinks">
            <Link to='/vivero-serrano' className="linkHeaderRedes spanTitulos" >
                <span >INICIO</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes spanTitulos" >
                <span >SERVICIOS</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes spanTitulos" >
                <span >NOTICIAS</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes spanTitulos" >
                <span >GALERIA</span>
            </Link>
            <span>|</span>
            <Link to='/vivero-serrano' className="linkHeaderRedes spanTitulos" >
                <span >CONTÁCTENOS</span>
            </Link>
        </div>
    )
}

export default FooterLinks