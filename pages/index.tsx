import React from 'react';
import { Heading, Center, HStack, Link, Text } from '@chakra-ui/react';

const Home: React.FC = () => (
  <>
    <Center mt="20">
      <Heading color="primary.500">Welcome to this Template with Next + Chakra UI + Typescript!</Heading>
    </Center>
    <Center mt="10">
      <HStack>
        <Text>By: </Text>
        <Link color="primary.400" href="https://www.linkedin.com/in/flamarion-fagundes-pinto-0b037b210/">Flamarion Fagundes Pinto</Link>
      </HStack>
    </Center>
  </>

);

export default Home;
