import styled from 'styled-components';

export const day = {
  dark: false, 
  first: '#d92261', // couleur primaire
  second: '#ffdab5', // couleur secondaire
  bg: 'linear-gradient(45deg, rgba(217,34,97,1) 0%, rgba(255,218,181,1) 100%)', // arrière-plan de la page
  app: '#fff', // arrière-plan du container du quiz
  mobileBg: 'linear-gradient(45deg, rgba(217,34,97,1) 0%, rgba(255,218,181,1) 100%)', // arrière-plan de la page en mode mobile
  mobileApp: '#fff', // arrière-plan du container du qui en mode mobile
  font: '#454545', // couleur du texte
  button: '#d92261', // couleur des boutons
  quotebg: '#eee', // couleur d'arrière-plan des réponses aux questions
  correct: '#19c422', // couleur texte bonne réponse
  wrong: '#f41313', // couleur texte mauvaise réponse
  icon: '#454545', // couleur icone dark mode (lune/soleil)
  iconHover: '#d92261' // couleur icone dark mode survolée
}

export const night = {
  dark: true,
  first: '#000',
  second: '#555555',
  bg: '#171717',
  app: 'linear-gradient(45deg, rgba(40,40,40,1) 0%, rgba(115,115,115,1) 100%)',
  mobileBg: 'linear-gradient(45deg, rgba(40,40,40,1) 0%, rgba(115,115,115,1) 100%)',
  mobileApp: '#171717',
  font: '#fff',
  button: '#2fb9ef',
  quotebg: '#737373',
  correct: '#32bc39',
  wrong: '#d62a2a',
  icon: '#eee',
  iconHover: '#e8d64e'
}

export const Button = styled.button({
  boxSizing: 'border-box',
  margin: '20px 0 20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10px',
  width: 240,
  height: 56,
  backgroundColor: props => props.theme.button,
  color: '#eee',
  borderColor: props => props.theme.button,
  borderWidth: 2,
  borderRadius: 6,
  borderStyle: 'solid',
  fontSize: '1.4em',
  fontWeight: 600,
  cursor: 'pointer',

  '@media(min-width: 768px)': {
    margin: '0 20px 0 20px',
    width: 140,
    height: 40,
    fontSize: '1.2em',
    background: 'none',
    color: props => props.theme.button,
    transition: '0.2s ease',

    '&:hover': {
      backgroundColor: props => props.theme.button,
      color: '#fff'
    },
  },

  '@media screen and (min-width: 1920px)': {
    width: 180,
    height: 50,
    fontSize: '1.4em'
  }
});

export const H2 = styled.h2({
  margin: 0,
  fontSize: '2em',
  color: props => props.theme.font,

  '@media(min-width: 768px)': {
    fontSize: '1.6em',
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '2em'
  }
});

export const H3 = styled.h3({
  margin: 0,
  fontSize: '1.4em',
  lineHeight: '1.5em',
  color: props => props.theme.font,

  '@media(min-width: 768px)': {
    fontSize: '1.2em',
    lineHeight: '1.4em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.6em'
  }
});

export const Select = styled.select({
  width: 250,
  height: 30,
  margin: '60px 0',
  fontSize: '1em',
  paddingLeft: 10,

  '@media(max-width: 768px)': {
    height: 40,
    fontSize: '1.1em'
  }
});

export const Label = styled.label({
  margin: 0,
  fontSize: '1.1em',
  color: props => props.theme.font,

  '@media(min-width: 768px)': {
    fontSize: '1em',
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1.2em'
  }
});
