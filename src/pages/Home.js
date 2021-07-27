import React, { Component } from 'react'
import { Slideshow, Slide, TextoSlide } from '../components/Slideshow';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ margin: '17px' }}>
                    <DivSlide>
                        {/* <Titulo>Productos Destacados</Titulo> */}
                        <Slideshow controles={true} velocidad="2000" intervalo="4000"> {/*  autoplay={true}  */}
                            <Slide>
                                <Link to='/vivero-serrano'>
                                    <img src={img1} alt="" />
                                    <TextoSlide colorFondo="rgba(0,0,0,0)">
                                        <Parrafo>Más Información</Parrafo>
                                    </TextoSlide>
                                </Link>
                            </Slide>
                            <Slide>
                                <Link to='/vivero-serrano'>
                                    <img src={img2} alt="" />
                                    <TextoSlide colorFondo="rgba(0,0,0,0)">
                                        <Parrafo>Más Información</Parrafo>
                                    </TextoSlide>
                                </Link>
                            </Slide>
                            <Slide>
                                <Link to='/vivero-serrano'>
                                    <img src={img3} alt="" />
                                    <TextoSlide colorFondo="rgba(0,0,0,0)">
                                        <Parrafo>Más Información</Parrafo>
                                    </TextoSlide>
                                </Link>
                            </Slide>
                            <Slide>
                                <Link to='/vivero-serrano'>
                                    <img src={img4} alt="" />
                                    <TextoSlide colorFondo="rgba(0,0,0,0)">
                                        <Parrafo>Más Información</Parrafo>
                                    </TextoSlide>
                                </Link>
                            </Slide>
                        </Slideshow>
                    </DivSlide>
                    <div>articulos ofertas</div>
                    <div>productos mas vendidos</div>
                    <div>info </div>
                </div>
            </div>
        )
    }

}
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
const DivSlide = styled.div`
    max-width:1280px;
    margin:  auto;
    overflow: hidden;
`;
const Parrafo = styled.p`
    color:green;
    padding: 20px;
    max-width: 450px;
    font-size: 30px;
    border: 10px solid green;
    border-radius:10px;
    font-weight:900;
    margin: auto;

    @media screen and (max-width: 960px) {
		font-size: 15px;
        max-width: 350px;
        padding: 7px;
        border: 4px solid green;
	}

`;

export default Home