import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Themes";
import GlobalStyle from "./globalStyles";





// components

import Main from './Components/Main';
import AboutPage from './Components/AboutPage';
import WorkPage from './Components/WorkPage';
import MySkills from './Components/MySkills';







function App() {


  return <>


    <GlobalStyle />



    <ThemeProvider theme = {lightTheme}>

      <Switch>

        <Route exact path = '/' component={Main} />
        <Route exact path = '/about' component={AboutPage} />
        <Route exact path = '/work' component={WorkPage} />
        <Route exact path = '/skills' component={MySkills} />

      </Switch>
      
    </ThemeProvider>


    
    </>
    


}



export default App

