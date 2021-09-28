import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = (props) => {
  const {titulo,onClickBoton } = props;
  return (
    <Link to='#'>
      <Botton onClick={onClickBoton}>{titulo}</Botton>
    </Link>
  )
}

const Botton = styled.button`
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    background-color: ##c4c4c4;
    margin-right: 10px;

    &:hover {
      padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: green;
    color: #fff;
    font-weight: normal;
    border-radius: 4px;
    border: 2px solid #1888ff;
    transition: all 0.3s ease-out;
    }
`;


export default Button