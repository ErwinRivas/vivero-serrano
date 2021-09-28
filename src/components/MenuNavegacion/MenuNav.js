import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menuNav.css';
import Dropdown from './Dropdown';
import logo from './logo/flower.jpg'
import carrito from '../../images/carrito.png'
import login from '../../images/login.png'
import { InputText } from 'primereact/inputtext';



class MenuNav extends Component {
    state = {
        click: false,
        dropdown: false
    }
    handleClick = () => {
        const { click } = this.state
        this.setState({
            click: !click
        })
    }
    closeMobileMenu = () => {
        this.setState({
            click: false
        })
    }
    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState({
                dropdown: false
            })
        } else {
            this.setState({
                dropdown: true
            })
        }
    };

    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState({
                dropdown: false
            })
        } else {
            this.setState({
                dropdown: false
            })
        }
    };

    extendElement = () => {
        if (this.dropdown) {
            this.setState({
                dropdown: false
            })
        } else {
            this.setState({
                dropdown: true
            })
        }
    };


    render() {
        const { click, dropdown } = this.state
        return (
            <>
                <nav className='navbar'>
                    <Link to='/vivero-serrano' className='navbar-logo' onClick={this.closeMobileMenu}>
                        <img className="logo" src={logo} alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/vivero-serrano' className='nav-links' onClick={this.closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li
                            className='nav-item'
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                            onClick={this.extendElement}

                        >
                            <Link
                                to='/servicios'
                                className='nav-links'
                            >
                                SERVICIOS <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown onCloseMobileMenu={this.closeMobileMenu} />}
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/noticias'
                                className='nav-links'
                                onClick={this.closeMobileMenu}
                            >
                                NOTICIAS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/galeria'
                                className='nav-links'
                                onClick={this.closeMobileMenu}
                            >
                                GALERIA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contactenos'
                                className='nav-links'
                                onClick={this.closeMobileMenu}
                            >
                                CONTACTENOS
                            </Link>
                        </li>
                    </ul>
                    {/* <Button /> */}

                    <span className=" p-input-icon-left spanSearch">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" />
                    </span>
                    <div>
                        <Link to='/vivero-serrano' className="linkIconos" onClick={this.closeMobileMenu}>
                            <i className="fas fa-search fa-2x"></i>
                        </Link>
                        <Link to='/vivero-serrano' className="linkIconos" onClick={this.closeMobileMenu}>
                            <img className="iconos" src={carrito} alt='carrito' />
                        </Link>
                        <Link to='/vivero-serrano' className="linkIconos" onClick={this.closeMobileMenu}>
                            <img className="iconos" src={login} alt='login' />
                        </Link>
                    </div>

                </nav>
            </>
        );

    }
};

export default MenuNav;




