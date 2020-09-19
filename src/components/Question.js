import React from 'react';
import styled from 'styled-components';
import { H3, Label } from '../styles/styles';

//-- STYLES --//
const Answers = styled.div({
  width: 'auto',
  margin: '10px 0 40px',
  display: 'grid',
  gridRowp: 20,
  rowGap: 20,
  gridColumnGap: 40,
  columnGap: 40, 

  '& input, label': {
    margin: '0 5px'
  },

  '@media(min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridRowp: 10,
    rowGap: 10
  }
});

const Quote = styled.p({
  boxSizing: 'border-box',
  marginTop: 20,
  marginBottom: 0,
  padding: 14,
  width: '100%',
  fontStyle: 'italic',
  fontSize: '1em',
  lineHeight: '1.4em',
  textAlign: 'center',
  backgroundColor: props => props.theme.quotebg,
  borderRadius: 10,
  gridColumn: '1 / -1',
  color: props => props.theme.font,

  '@media(min-width: 768px)': {
    fontSize: '0.9em'
  },

  '@media screen and (min-width: 1920px)': {
    fontSize: '1em'
  }
});

//-- COMPONENT --//
const Question = props => {
  const { index, questions } = props;

  return (
    <div id='answers'>
      <H3 className={props.animation} css={`margin-bottom: 40px;`}>{index + 1}. {questions[index].title}</H3>
      <Answers>
        {
          questions[index].answers.map(answer => (
            <div css={`display: flex; justify-content: center; align-items: center;`} key={`div-${answer.id}`}>
              <input type='radio' id={answer.id} name='question' value={answer.value} disabled={props.solution} key={`input-${answer.id}`}></input>
              {
                answer.value && props.solution // Highlight de la bonne/mauvaise réponse lors de l'affichage de la solution
                  ? (<Label css={`color: ${props => props.theme.correct}; font-weight: 700;`} htmlFor={answer.id} key={`label-${answer.id}`}>{answer.label}</Label>) // Bonne réponse
                  : props.solution && document.getElementById(answer.id).checked
                    ? (<Label css={`font-weight: 700; color: ${props => props.theme.wrong}`} htmlFor={answer.id} key={`label-${answer.id}`}>{answer.label}</Label>) // Mauvaise réponse
                    : (<Label htmlFor={answer.id} key={`label-${answer.id}`}>{answer.label}</Label>)
              }
            </div>
          ))
        }
        {
          props.solution
            ? (<Quote className='appearleft'>{questions[index].quote}</Quote>)
            : (<div />)
        }
      </Answers>
    </div>
  );
}

export default Question;