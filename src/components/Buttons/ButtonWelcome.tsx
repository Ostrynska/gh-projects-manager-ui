import React from 'react';
import './Buttons.css';

interface ButtonWelcomeProps {
  onSignIn: () => void;
}

const ButtonWelcome: React.FC<ButtonWelcomeProps> = ({ onSignIn }) => {
  return (
    <button className="button-84" onClick={onSignIn}>
      Sign in
    </button>
  );
};

export default ButtonWelcome;
