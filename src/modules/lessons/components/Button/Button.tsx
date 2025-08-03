import * as React from 'react';
import './Button.scss';

type ButtonProps = {
  buttonText: string;
};

export const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return <button className='button button--primary'>{buttonText}</button>;
};
