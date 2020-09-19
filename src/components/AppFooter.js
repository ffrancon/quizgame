import React from 'react';
import styled from 'styled-components';

//-- STYLES --//
const Footer = styled.footer({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 60,
  padding: '0 20px',
  flexShrink: 0,
  background: props => props.theme.mobileBg,

  '@media(min-width: 768px)': {
    background: 'none'
  }
});

//-- COMPONENT --//
const AppFooter = () => {
  return(
    <Footer>
      <p css={`color: #fff; margin: 0`}>flo-wd</p>
    </Footer>
  );
}

export default AppFooter;