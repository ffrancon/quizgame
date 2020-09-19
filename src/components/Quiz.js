import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';
import Result from './Result';

import categories from '../data';
import { Button } from '../styles/styles';

//-- STYLES --//
const ButtonCt = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media(min-width: 768px)': {
    flexDirection: 'row'
  }
});

//-- COMPONENT --//
const Quiz = props => {
  const [state, setState] = useState({
    index: 0,
    score: 0,
    solution: false,
    questionAnimation: 'appear'
  });

  const questions = categories.filter(cat => cat.theme === props.category)[0].quiz;

  // Vérifie si la réponse choisie par le joueur est juste
  const validateAnswer = () => {
    const inputs = Object.entries(document.querySelectorAll('#answers input'));
    const inputChecked = inputs.filter(arr => arr[1].checked);

    // Pas de réponse cochée = message d'alerte
    if (inputChecked.length === 0) {
      alert('Aucune réponse sélectionnée');
    }
    // Bonne réponse
    else if(inputChecked[0][1].value === 'true') {
      return state.score + 1;
    }
    // Mauvaise Réponse
    else {
      return state.score;
    }
  }

  // Navigation parmi les questions/solutions
  const handleQuizButton = () => {
    const newScore = validateAnswer();
    // Le joueur a sélectionné une réponse: on affiche la solution
    if(!state.solution) {
      if(newScore || newScore === 0) {
        setState(prevState => {
          return {
            ...prevState,
            score: newScore,
            solution: !prevState.solution,
            questionAnimation: ''
          }
        });
      }
    }
    // La solution est affichée: le joueur passe à la question suivante
    else {
      const inputs = Object.entries(document.querySelectorAll('#answers input'));
      inputs.filter(arr => arr[1].checked)[0][1].checked = false; // Reset des radio buttons des réponses

      setState(prevState => {
        return {
          ...prevState,
          index: prevState.index + 1,
          solution: !prevState.solution,
          questionAnimation: 'appear'
        }
      });
    }
  }

  return (
    <div css={`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;`}>
      {state.index < questions.length
      ? (
        <div css={`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 80%;`}>
          <Question animation={state.questionAnimation} questions={questions} index={state.index} solution={state.solution} />
          <ButtonCt>
            {
              !state.solution
                ? (<Button onClick={handleQuizButton}>Valider</Button>)
                : (<Button onClick={handleQuizButton}>Suivant</Button>)
            }
            <Button onClick={props.action}>Accueil</Button>
          </ButtonCt>
        </div>
      )
      : (
        <div css={`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;`}>
          <Result questions={questions} score={state.score} />
          <Button onClick={props.action}>Accueil</Button>
        </div>  
        )
      }
    </div>
  );
}

export default Quiz;