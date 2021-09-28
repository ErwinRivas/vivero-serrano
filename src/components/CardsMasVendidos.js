import React, { Component } from 'react'
import styled from 'styled-components'
import datos from '../datos'
import { Link } from 'react-router-dom'
import { ContenidoImgFiltroDiv, ImagenCont, TextoCont } from '../components/TabsContenidoUno'
import Button from '../components/MenuNavegacion/Button'


class CardsMasVendidos extends Component {
    render() {
        const { estadoBoton, onClickBoton } = this.props
        const imagenesDatos = datos.filter((dato, i) => {
            if (estadoBoton) {
                return i <= i
            } else {
                return i <= 11
            }
        });
        console.log(imagenesDatos);
        const cardsImagenes = imagenesDatos.map((imagenes, i) => {
            return (
                <ContenidoImgFiltroDiv alturaMax="450px" anchuraMax="450px"  key={i}>
                    <ImagenCont src={imagenes.img} alt={imagenes.nombre} />
                    <TextoCont colorText="#fff" tamanioText="1.9vw" >{imagenes.nombre}</TextoCont>
                </ContenidoImgFiltroDiv>
            )
        });
        return (
            <div>
                <Contenedor>
                    <Titulo>productos más vendidos</Titulo>
                    <ContenidoCards>
                        {cardsImagenes}
                    </ContenidoCards>
                </Contenedor>
                <ContenedorBoton botonActivo={estadoBoton}>
                    <Button titulo="VER TODOS LOS PRODUCTOS" onClickBoton={onClickBoton} />
                </ContenedorBoton>
            </div>

        )
    }
}


const Contenedor = styled.div`
width: 90%;
max-width: 90%;
margin: auto;
`;
const ContenedorBoton = styled.div`
display:${props => props.botonActivo ? 'none' : 'flex'};;
justify-content:center;
margin-top:27px;

`;

const ContenidoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px; 
  text-align: center;
  justify-content: space-between;
  white-space: nowrap;
`;
const Titulo = styled.p`
	font-size: 2vw;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
    margin-top: 35px;
`;




export default CardsMasVendidos;