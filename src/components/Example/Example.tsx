import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ExampleProps } from './Example.types';

export const Example: React.FC<ExampleProps> = (props) => {
  const { text } = props;

  return (
    <Flex>
      <Text>{text}</Text>
    </Flex>
  );
}