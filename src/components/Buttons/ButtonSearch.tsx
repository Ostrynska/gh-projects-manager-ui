import React from 'react';
import './Buttons.css';

interface ButtonSearchProps {
  handleClick: () => void;
}

const ButtonSearch: React.FC<ButtonSearchProps> = ({ handleClick }) => {
  return (
    <button className="button-31" onClick={handleClick}>
        Add Project
    </button>
  );
};

export default ButtonSearch;
