import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialMedia from '../subComponents/SocialMedia';
import PowerButton from '../subComponents/PowerButton';

import {Work} from "../data/WorkData";
import Card from '../subComponents/Card';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const Main = styled.ul`
position: fixed;
top: 12rem;
left: 18rem;
display: flex;
flex-direction: column;
align-items: center;
color: white;
`

const WorkPage = () => {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box>
        <LogoComponent theme = 'dark' />
        <SocialMedia theme = 'dark'/>
        <PowerButton  />

        <Main>
          {Work.map(d => 
            <Card key={d.id} data = {d} />
          )}
        </Main>

      </Box>
    </ThemeProvider>
    
  )
}

export default WorkPage
