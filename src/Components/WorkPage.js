import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import SocialMedia from '../subComponents/SocialMedia';
import PowerButton from '../subComponents/PowerButton';

const MainContainer = styled.div`

`
const Container = styled.div`

`

const WorkPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialMedia />

      </Container>
    </MainContainer>
  )
}

export default WorkPage
