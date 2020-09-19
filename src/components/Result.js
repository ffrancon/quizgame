import React from 'react';
import { H2, H3 } from '../styles/styles';

const Result = props => {
  const ratio = (props.score * 100)/props.questions.length;
  let cheers = '';

  if(ratio <= 33) {
    cheers = 'Dommage :/';
  }
  else if(ratio > 33 && ratio <= 66) {
    cheers = 'Pas mal !';
  }
  else {
    cheers = 'Bravo !';
  }

  return (
    <div>
      <H2 css={`margin-bottom: 20px; text-align: center;`}>{cheers}</H2>
      <H3 css={`margin-bottom: 30px; text-align: center;`}>Vous avez obtenu {props.score} réponse(s) correcte(s) sur {props.questions.length} questions.</H3>
    </div>
  )
}

export default Result;