import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { PowerBtn } from '../Components/AllSvgs';

const Home = styled.button`
  
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color:#FCF6F4;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items:center
    cursor: pointer;
    font-weight: bold;
    border-radius: 15px;
    font-size:20px;
    border: none;
    z-index: 2;

    &:hover{
      transition: 0.2s;
      background-color: rgba(0, 255, 0, 0.4);
      box-shadow: 0 0 10px 10px rgba(0, 255, 0, 0.4);
    }

    &>*:first-child{
      text-decoration: none;
      color: inherit;
    }


  `


const PowerButton = () => {
  return (
    <Home>
      <NavLink  to = "/">
        <PowerBtn width = {30} height = {30} fill =  'currentColor' />
      </NavLink>
    </Home>
  )
}

export default PowerButton
