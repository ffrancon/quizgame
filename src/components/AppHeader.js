import React from 'react';
import styled from 'styled-components';

//-- STYLES --//
const Header = styled.header({
  boxSizing: 'border-box',
  width: '100%',
  height: 60,
  padding: '0 20px',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: props => props.theme.mobileBg,

  '@media(min-width: 768px)': {
    background: 'none'
  }
});

//-- COMPONENT --//
const AppHeader = () => {
  return (
    <Header>
      <h1 css={`color: #fff; font-size: 1.8em; margin: 0`}>React Project : Quiz</h1>
    </Header>
  )
};

export default AppHeader;