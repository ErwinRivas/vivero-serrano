import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const InfoEntregasVarios = () => {
    return (
        <Contenedor>
            <ContenidoInfo>
                <InfoLink to='/vivero-serrano'>
                    <DivContenidoIndividual>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Icono className="fas fa-car"></Icono></div>
                        <DivInformacion>
                            <h3>ASESORAMIENTO Y VENTAS</h3>
                            <Parrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</Parrafo>
                        </DivInformacion>

                    </DivContenidoIndividual> </InfoLink>
                <InfoLink to='/vivero-serrano'>
                    <DivContenidoIndividual>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Icono className="fas fa-car"></Icono></div>
                        <DivInformacion>
                            <h3>ASESORAMIENTO Y VENTAS</h3>
                            <Parrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</Parrafo>
                        </DivInformacion>
                    </DivContenidoIndividual>
                </InfoLink>
                <InfoLink to='/vivero-serrano'>
                    <DivContenidoIndividual>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Icono className="fas fa-car"></Icono></div>
                        <DivInformacion>
                            <h3>ASESORAMIENTO Y VENTAS</h3>
                            <Parrafo>Lorem ipsum, dolor sit amet consectetipisicing elit.?</Parrafo>
                        </DivInformacion>
                    </DivContenidoIndividual>
                </InfoLink>
            </ContenidoInfo>
        </Contenedor>
    )
}

const ContenidoInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  text-align: center;
  justify-content: space-around;
  white-space: nowrap;
  background:#93d193;
  margin-top:27px;
`;

const DivContenidoIndividual = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
@media screen and (max-width: 1060px) {
    h3{
        font-size:15px;
    }
}
@media screen and (max-width: 920px) {
    h3{
        font-size:10px;
        font-weight: bold;
    }
}
`;

const DivInformacion = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
margin: 5px;
align-items:start;
white-space: normal;

`;

const Contenedor = styled.div`
width: 100%;
max-width: 100%;
margin: auto;
`;

const Icono = styled.i`
font-size: 5vw;
`;

const Parrafo = styled.p`
text-align: start;
font-size:1.2vw;
`;

const InfoLink = styled(Link)`
text-decoration: none;
color: #000;
`;
export default InfoEntregasVarios