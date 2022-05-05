import { motion } from 'framer-motion';
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialMedia from '../subComponents/SocialMedia';
import { Xbox } from './AllSvgs';
import { Landing } from './Landing';

const MainContainer = styled.div`
  

  background: ${props => props.theme.body};
  width : 100vw;
  height: 100vh;
  overflow:hidden;

  position: relaative;


  h2, h3, h4, h5, h6{
    font-family:'karla', sans-serif ;
    font-weight:500;
  }
  
  `

  const Container = styled.div`
  

  padding: 2rem;
  
  
  `

  const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index:1;
  border: none;
  border-radius: 15px;

  &:hover{
    transition: 0.5s;
    background-color: rgba(255, 214, 153, 0.5);
    box-shadow: 0 0 10px 10px rgba(255, 214, 153, 0.5);
  }
  
  `

  const Work = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index:1;
  border-radius:15px;
  border: none;

  &:hover{
      
    transition: 0.5s;
    background-color: rgba(255, 255, 0, 0.4);
    box-shadow: 0 0 10px 10px rgba(255, 255, 0, 0.4);
  }
  
  `
  const Skills = styled(NavLink)`
  color: ${props => props.theme.text};

  text-decoration: none;
  z-index:1;
  border-radius:15px;
  border: none;

  &:hover{
      
    transition: 0.5s;
    background-color: rgba(255, 51, 160, 0.4);
    box-shadow: 0 0 10px 10px rgba(255, 51, 160, 0.4);
  }
  
  `
  const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  
  `
  const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};

  text-decoration: none;
  z-index:1;
  border-radius:15px;
  border: none;

  &:hover{
      
    transition: 0.5s;
    background-color: rgba(102, 217, 255, 0.5);
    box-shadow: 0 0 10px 10px rgba(102, 217, 255, 0.5);
  }
  
  `

  const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
  `

  const Center = styled.button`
    position: absolute;
    top: ${props => props.click  ? '85%' : '50%'};
    left: ${props => props.click  ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 1s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:15px;


    &:hover{
      transition: 0.5s;
      background-color: rgba(242, 242, 242, 0.5);
      box-shadow: 0 0 10px 10px rgba(242, 242, 242, 0.5);
    }

    &>:first-child{
      animation: ${rotate} infinite 2s linear;
    }

    &>:last-child{
      display: ${props => props.click ? 'none' : 'inline-block' };
      padding-top: 0.5rem;
      border-radius:15px;

    }
  `

  const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color:#000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  
  `

  

const Main = () => {

  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click)

  return (
    <MainContainer>
      <DarkDiv click = {click}/>
        <Container>
          <PowerButton />
          
          <LogoComponent theme={click ? 'dark' : 'light'} />
          <SocialMedia theme={click ? 'dark' : 'light'} />
          
          <Center click={click}>
            <Xbox onClick={() => handleClick()} width={click ? 110 : 200} height = {200} fill='currentColor' />
            <span>
              Click here
            </span>
          </Center>

          <Contact target = "_blank" to = {{pathname:"mailto:yashrajvarma9@gmail.com"}} >
            <motion.h2 whileHover={{scale:1.1}} whileTap = {{scale: 0.9}} >
              Get in touch..?
            </motion.h2>
          </Contact>

          <Work to = "/work" >
            <motion.h2 whileHover={{scale:1.1}} whileTap = {{scale: 0.9}}>
              Work
            </motion.h2>
          </Work>
          
          

          <BottomBar>
            <About to = "/about" click = {click}>
              <motion.h2 whileHover={{scale:1.1}} whileTap = {{scale: 0.9}}>
                About.
              </motion.h2>
            </About>

            <Skills to = "/skills" click = {click} >
            <motion.h2 whileHover={{scale:1.1}} whileTap = {{scale: 0.9}}>
              My Skills
            </motion.h2>
          </Skills>
          </BottomBar>

        </Container>
        {click ? <Landing click = {click} />: null }
    </MainContainer>
  )
}

export default Main
