import React, { Component } from "react"
import styled from "styled-components";
import datos from '../datos'
import { Link } from 'react-router-dom';

class TabsContenidoUno extends Component {
    render() {
        const imagenesDatos = datos.filter((dato, i) => {
            return i <= 3
        });
        const imagenesFiltradas = imagenesDatos.map((imagenes, i) => {
            return (
                <ContenidoImgFiltroDiv>
                    <ImagenCont src={imagenes.img} alt={imagenes.nombre} />
                    <TextoCont colorText="#fff" tamanioText="1.9vw" >{imagenes.nombre}</TextoCont>
                </ContenidoImgFiltroDiv>
            )
        });

        return (
            <>
                <ContenidoUno colorFondo="#fff">
                    <ImagenCont src={datos[0].img} alt="bonsai" anchura="80%" altura="80%" margenTop="25px" />
                    <TextoCont colorText="#000" tamanioText="1.5vw" noPadding posicionText="relative">
                        Las mejores plantitas del Ecuador </TextoCont>
                </ContenidoUno>
                <ContenidoUno colorFondo="#fff" >
                    <ImgFiltradasTitulo>
                        <TextoCont colorText="#000" posicionText="relative" noPadding >
                            <h1>Tipos o Categorias de Plantas </h1> </TextoCont>
                        <SpanLink to='/vivero-serrano'>Ver todas </SpanLink>
                    </ImgFiltradasTitulo>

                    <hr />
                    <ImagenesFiltradasDiv>
                        {imagenesFiltradas}
                    </ImagenesFiltradasDiv>
                </ContenidoUno>
            </>
        )
    }
}

export default TabsContenidoUno

const ContenidoUno = styled.div`
text-align:center;
width:50%;
max-height: 450px;
position:relative;
background:${props => props.colorFondo ? props.colorFondo : ''};
hr{
    width: 98%;
    margin:auto;
    
}



`;

const ImagenCont = styled.img`
height: ${props => props.altura ? props.altura : '100%'};
width:${props => props.anchura ? props.anchura : '100%'};
margin-top: ${props => props.margenTop ? props.margenTop : ''};

@media screen and (max-width: 500px) {
    margin-top: ${props => props.margenTop ? '7px' : ''};
}

`;

const TextoCont = styled.div`
	padding: ${props => props.noPadding ? '0' : '10px 7px'}; 
	position:  ${props => props.posicionText ? props.posicionText : 'absolute'};
    text-align: center;
	bottom: 0;
    color: ${props => props.colorText ? props.colorText : '#fff'};
    font-size: ${props => props.tamanioText ? props.tamanioText : '0.85vw'};
	font-weight: 900;

`;

const ImagenesFiltradasDiv = styled.div`
display:grid;
justify-content:space-around;
grid-template-columns: repeat(2, auto);
margin-top: 2%; 
`;

const ImgFiltradasTitulo = styled.div`
display: flex; 
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 7px 3px 0px 3px;
`;

const ContenidoImgFiltroDiv = styled.div`
position:relative;
max-width: 280px;
max-height: 250px;
padding: 16px 36px;
@media screen and (max-width: 996px) {
padding: 1px 1px;
}

`;

const SpanLink = styled(Link)`
text-decoration: none;
color: #9b9b9b;
font-weight: 400;
font-size: 1.3vw;
`;