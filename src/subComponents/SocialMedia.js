import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, Instagram } from '../Components/AllSvgs';
import styled from 'styled-components';
import { darkTheme } from '../Components/Themes';

const Line = styled.span`

width:3px;
height: 9rem;
background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
`


const Icons = styled.div` 

display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
  margin:0.5rem 0;
}
`

const SocialMedia = (props) => {
  return (
    <Icons>
      <div>
          <NavLink style = {{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/Yash-Raj-Varma"}}  >
              <Github width  = {27} height = {27} fill = {props.theme === "dark" ? darkTheme.text : darkTheme.body } />
          </NavLink>
      </div>
      <div>
        
          <NavLink  target="_blank" to={{pathname:"https://twitter.com/YashRaj48234332"}}  >
              <Twitter width  = {27} height = {27} fill = {props.theme === "dark" ? darkTheme.text : darkTheme.body } />
          </NavLink>
        
      </div>
      <div>
          <NavLink style = {{color:'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/yashrajvarm/"}}  >
              <Facebook width  = {27} height = {27} fill = {props.theme === "dark" ? darkTheme.text : darkTheme.body } />
          </NavLink>
      </div>
      <div>
          <NavLink style = {{color:'inherit'}} target="_blank" to={{pathname:"https://www.instagram.com/yash.varma11/"}}  >
              <Instagram width  = {27} height = {27} fill = {props.theme === "dark" ? darkTheme.text : darkTheme.body } />
          </NavLink>
      </div>

      <Line color = {props.theme}/>
    </Icons>
  )
}

export default SocialMedia
