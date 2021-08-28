import { useState } from "react";
import styled from 'styled-components';
import TabsContenidoUno from "./TabsContenidoUno";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <ContenedorPrincipal>
            <ContenedorTabs>
                <Boton
                    colorBefore1="green" fontW1="900" borderB1="1px solid transparent"
                    tabActivo={toggleState}
                    onClick={() => toggleTab(1)}
                >
                    <Titulo>ARTÍCULOS</Titulo>
                </Boton>
                <Boton
                    colorBefore2="red" fontW2="900" borderB2="1px solid transparent"
                    tabActivo={toggleState}
                    onClick={() => toggleTab(2)}
                >
                    <Titulo>  NUESTROS SERVICIOS</Titulo>
                </Boton>
                <Boton
                    colorBefore3="orange" fontW3="900" borderB3="1px solid transparent"
                    tabActivo={toggleState}
                    onClick={() => toggleTab(3)}
                >
                    <Titulo>OFERTAS </Titulo>
                </Boton>
            </ContenedorTabs>
            <hr style={{ marginBottom: '27px' }} />
            <ContenedorContenidoTabs>
                <DivContenido
                    colorContenido1="green"
                    ocultarDiv12="none" ocultarDiv13="none"
                    tabActivo={toggleState}
                >
                    <Contenidos>
                        <TabsContenidoUno />
                    </Contenidos>
                </DivContenido>

                <DivContenido
                    colorContenido2="red"
                    ocultarDiv23="none" ocultarDiv12="none"
                    tabActivo={toggleState}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </DivContenido>

                <DivContenido
                    colorContenido3="orange"
                    ocultarDiv13="none" ocultarDiv23="none"
                    tabActivo={toggleState}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </DivContenido>
            </ContenedorContenidoTabs>
        </ContenedorPrincipal>
    );
}

export default Tabs;

const ContenedorPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    max-width: 1280px;
    max-height: 100%;
    /* background: #f1f1f1; */
    margin: 17px auto 0;
    word-break: break-all;
    /* border: 1px solid rgba(0, 0, 0, 0.274); */
`;

const ContenedorTabs = styled.div`
    display: flex;
    justify-content: center;   /* justify-content va con align items; si quiero centrar algo de un flex*/
    align-items: center;
`;



const Boton = styled.button`
border: none;
padding: 15px;
text-align: center;
max-width: 50%;
background: rgba(0, 0, 0, 0);
cursor: pointer;
/* border-bottom: 1px solid rgba(0, 0, 0, 0.274); */
box-sizing: content-box;
position: relative;
outline: none;

color: ${props => props.tabActivo === 1 ? props.colorBefore1
        : props.tabActivo === 2 ? props.colorBefore2
            : props.tabActivo === 3 ? props.colorBefore3
                : 'black'};

font-weight: ${props => props.tabActivo === 1 ? props.fontW1
        : props.tabActivo === 2 ? props.fontW2
            : props.tabActivo === 3 ? props.fontW3
                : '0'};

border-bottom: ${props => props.tabActivo === 1 ? props.borderB1
        : props.tabActivo === 2 ? props.borderB2
            : props.tabActivo === 3 ? props.borderB3
                : '0'};

&:before {
content: "";
display: block;
position: absolute;
bottom: -6px;
left: 50%;
transform: translateX(-50%);
width: calc(100% + 2px);
height: 5px;
background: ${props => props.tabActivo === 1 ? props.colorBefore1
        : props.tabActivo === 2 ? props.colorBefore2
            : props.tabActivo === 3 ? props.colorBefore3
                : 'white'};
`;


const ContenedorContenidoTabs = styled.div`
    display:flex;
    max-width: 1280px;
    width: 100%;
`;


const DivContenido = styled.div`
padding: 20px 50px;
width: 100%;
height: 100%;
background: ${props => props.tabActivo === 1 ? props.colorContenido1
        : props.tabActivo === 2 ? props.colorContenido2
            : props.tabActivo === 3 ? props.colorContenido3
                : 'white'};

display: ${props => props.tabActivo === 1 ? props.ocultarDiv23
        : props.tabActivo === 2 ? props.ocultarDiv13
            : props.tabActivo === 3 ? props.ocultarDiv12
                : 'none'};


h2{
    padding: 0px 0 5px 0px;
  }
hr{
    width: 100%;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }
p{
    width: 100%;
    height: 100%;
  }   
  @media screen and (max-width: 996px) {
padding: 7px 17px;
}         
`;


const Contenidos = styled.div`
display:flex;
justify-content: space-around;
grid-gap: 7px; 

`;

const Titulo = styled.p`
	font-size: 14px;
    @media screen and (max-width: 450px) {
        font-size: 8px;
}
`;