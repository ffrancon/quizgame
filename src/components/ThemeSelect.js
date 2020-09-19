import React from 'react';

import { Button, H2, Select } from '../styles/styles';
import categories from '../data';

const ThemeSelect = props => {
  return (
    <div className='appear' css={`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <H2>Choisissez un thème :</H2>
      <Select name="theme-select" id="theme-select">
        {categories.map(category => <option value={category.theme} key={`option-${category.theme}`}>{category.title}</option>)}
      </Select>
      <Button onClick={() => props.action(document.getElementById('theme-select').value)}>C'est parti !</Button>
    </div>
  );
}

export default ThemeSelect;