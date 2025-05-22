import React from 'react';
import { Button } from './style';

const AddButton: React.FC<{ text: string }> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default AddButton;
