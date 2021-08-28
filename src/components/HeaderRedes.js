import React from 'react'
import './headerRedes.css'
import { Link } from 'react-router-dom';
import LinkRedesDir from './LinkRedesDir';
import LinkRedesWhats from './LinkRedesWhats';
import LinkRedesEmail from './LinkRedesEmail';

const HeaderRedes = () => {
    return (
        <nav className="navHeaderRedes">
            <LinkRedesDir />
            <LinkRedesWhats />
            <LinkRedesEmail />
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