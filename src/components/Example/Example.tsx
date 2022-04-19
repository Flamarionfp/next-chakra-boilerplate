import React from 'react';
import { Text } from '@chakra-ui/react';
import { ExampleProps } from './Example.types';

export const Example: React.FC<ExampleProps> = (props) => {
  const { text = 'Hello World' } = props;

  return (
    <Text>{text}</Text>
  );
}