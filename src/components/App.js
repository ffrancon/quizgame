import React from 'react';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Quiz from './Quiz';
import ThemeSelect from './ThemeSelect';
import { day, night } from '../styles/styles';

//-- STYLES --//
const Page = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: props => props.theme.mobileBg,

  '@media(min-width: 768px)' : {
    background: props => props.theme.bg
  }
});

const Wrapper = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 0',
  width: '100%',
  flexGrow: 1,
  background: props => props.theme.mobileApp,

  '@media(min-width: 768px)' : {
    background: 'none'
  }
});

const AppBlock = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 20px',
  background: 'none',

  '@media(min-width: 768px)' : {
    width: 900,
    minHeight: 500,
    padding: 40,
    background: props => props.theme.app,
    WebkitBoxShadow: '1px 2px 5px -3px rgba(0,0,0,0.75)',
    MozBoxShadow: '1px 2px 5px -3px rgba(0,0,0,0.75)',
    boxShadow: '1px 2px 5px -3px rgba(0,0,0,0.75)',
    borderRadius: 40,
  },

  '@media(min-width: 1920px)' : {
    width: 1000,
    minHeight: 600,
    padding: 40,
  }
});

const Svg = styled.svg({
  position: 'absolute',
  width: 30,
  height: 30,
  right: 20,
  top: 15,
  cursor: 'pointer',
  fill: props => props.theme.icon,

  '&:hover': {
    fill: props => props.theme.iconHover
  },

  '@media(min-width: 768px)' : {
    top: 20
  },

  '@media(min-width: 1920px)' : {
    width: 40,
    height: 40
  }
});

//-- COMPONENT --//
const App = () => {
  const [ category, setCategory ] = useState(null);
  const [ theme, setTheme ] = useState(day);

  // Choix du quiz
  const validateChoice = choice => {
    setCategory(choice);
  }

  // Retour à l'accueil
  const returnToSelect = () => {
    setCategory(null);
  }

  // Activation/désactivation du mode sombre
  const toggleDarkMode = () => {
    if(!theme.dark) {
      setTheme(night);
    }
    else {
      setTheme(day)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <AppHeader />
        {theme.dark
          ? (<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.4 302.4" onClick={toggleDarkMode}> {/* Mode sombre = ON */}
              <path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/>
            </Svg>)
          : (<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.999 312.999" onClick={toggleDarkMode}> {/* Mode sombre = OFF */}
              <path d="M305.6 178.053c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.8 60-32.8 96.4 0 43.6 17.6 83.2 46.4 112s68.4 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 2-6-1.2-11.6-6.8-12.8zm-61.2 83.6c-23.2 18.4-52.8 29.6-85.2 29.6-38 0-72.4-15.6-97.2-40.4-24.8-24.8-40.4-59.2-40.4-97.2 0-31.6 10.4-60.4 28.4-83.6 12.4-16 28-29.2 46-38.4-2 4.4-4 8.8-5.6 13.6-5.2 14.4-7.6 29.6-7.6 45.6 0 38 15.6 72.8 40.4 97.6s59.6 40.4 97.6 40.4c16.8 0 32.8-2.8 47.6-8.4 5.2-2 10.4-4 15.2-6.4-9.6 18.4-22.8 34.8-39.2 47.6z"/>
            </Svg>)
        }
        <Wrapper>
          <AppBlock>
            {
              !category // Affiche la page d'accueil (choix du quiz) ou le quiz sélectionné
                ? (<ThemeSelect action={validateChoice}/>)
                : (<Quiz action={returnToSelect} category={category}/>)
            }
          </AppBlock>
        </Wrapper>
        <AppFooter />
      </Page>
    </ThemeProvider>
  );
}

export default App;