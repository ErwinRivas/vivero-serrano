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
                    <TextoCont colorText ="#fff" tamanioText="1.5vw" >{imagenes.nombre}</TextoCont>
                </ContenidoImgFiltroDiv>
            )
        });

        return (
            <>
                <ContenidoUno>
                    <ImagenCont src={datos[0].img} alt="bonsai" />
                    <TextoCont colorText ="#000" > <h1>Las mejores plantitas del Ecuador</h1></TextoCont>
                </ContenidoUno>
                <ContenidoUno colorFondo="#fff" >
                    <ImgFiltradasTitulo>
                    <TextoCont colorText ="#000" posicionText="relative" noPadding >
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
width:50%;
max-height: 400px;
position:relative;
background:${props => props.colorFondo ? props.colorFondo : ''};
hr{
    width: 98%;
    margin:auto;
    
}

`;

const ImagenCont = styled.img`
height:100%;
width:100%;
`;

const TextoCont = styled.div`
	padding: ${props => props.noPadding ? '0' : '10px 23px'}; 
	position:  ${props => props.posicionText ? props.posicionText : 'absolute   '};
    text-align: center;
	bottom: 0;
    color: ${props => props.colorText ? props.colorText : '#fff'};
    font-size: ${props => props.tamanioText ? props.tamanioText : '0.85vw'};
	font-weight: 700;

`;

const ImagenesFiltradasDiv = styled.div`
display:grid;
justify-content:space-around;
grid-template-columns: repeat(2, auto);
grid-gap: 30px; 
margin-top: 12px;
`;

const ImgFiltradasTitulo = styled.div`
display: flex; 
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 3px 3px 0px 3px;
`;

const ContenidoImgFiltroDiv = styled.div`
position:relative;
max-width: 240px;
max-height: 150px;
padding: 10px 20px;
`;

const SpanLink = styled(Link)`
text-decoration: none;
color: #9b9b9b;
font-weight: 400;
font-size: 1.3vw;
`; 