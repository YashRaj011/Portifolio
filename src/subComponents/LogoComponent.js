import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { darkTheme } from '../Components/Themes';

const Logo = styled(motion.div)`
  
    display: inline-block;
    color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
    font-family: 'Pacifico',cursive;
    font-size: 22px;
    

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
    
  
  `

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme} whileHover={{scale:1.1}} whileTap = {{scale: 0.9}}>
      YRV
    </Logo>
  )
}

export default LogoComponent
