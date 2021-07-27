import React, { Component } from 'react'
import './footer.css'
import '../components/headerRedes.css'
import LinkRedesDir from './LinkRedesDir'
import LinkRedesEmail from './LinkRedesEmail'
import LinkRedesWhats from './LinkRedesWhats'
import { Link } from 'react-router-dom'
import logo from '../components/MenuNavegacion/logo/flower.jpg'
import FooterLinks from './FooterLinks'

class Footer extends Component {
    render() {
        return (
            <div >
                <nav className="navFooter">
                    <nav className="navFooterTodos">    
                        <div>
                            <nav className="navFooterLink">
                                <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                    <img className="imgLogo" src={logo} alt='logo' />
                                </Link>
                                <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                    <span className="spanLogo"> VIVERO SERRANO </span>
                                </Link>
                            </nav>
                            <div>
                                <FooterLinks />
                            </div>
                        </div>
                        <div>
                            <h1 className="h1Titulos">ENLACES DE INTERES</h1>
                            <ul className="ulListFooter">
                                <li>
                                    <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                        Acerca de
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                        Noticias
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                        Galeria
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                        Más vendidos
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/vivero-serrano' className="linkHeaderRedes" >
                                        Servicios Disponibles
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="divContactenos">
                            <h1 className="h1Titulos">CONTÁCTANOS</h1>
                            <div><LinkRedesWhats /></div>
                            <div><LinkRedesEmail /></div>
                            <div><LinkRedesDir /></div>
                        </div>
                    </nav>
                    <nav className="navLine">
                        <br /><hr /><br />
                    </nav>
                    <nav className="navFooterLinkRedes">
                        <div></div>
                        <div className="divLink">
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
                        <div>
                            <span className="spanCopyright">Copyright © 2021 |  desarrollado por Rivas, Serrano, Guacho, Heredia</span>
                        </div>
                    </nav>
                </nav>
            </div>
        )
    }
}


export default Footer
