import * as React from 'react';
import './button.component.scss';

type ButtonProps = {
  buttonText: string;
};

export const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return <button className='button button--primary'>{buttonText}</button>;
};
