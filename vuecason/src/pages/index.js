import React from 'react';
import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'emotion-theming'

import { 
  Flex,
  Box , 
} from 'reflexbox';
import { 
  Heading,
  Button,
  Image,
} from 'rebass'

export default function Home() {

  return (
    <Flex
      style={{
        width: '100hw',
        height: '100vh',
        backgroundImage: `url(${withPrefix('/Resources/print.jpg')})`, 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPositionX: '100%',
        backgroundPositionY: '100%',
        backgroundSize: '50%',
      }}>

        <div
          style={{
            paddingLeft: '100px',
            paddingTop: '50px',
          }}>
            <Heading
              fontSize={[7]}
              color='#FF928B'
              style={{
                 paddingLeft: '12px',
                 paddingBottom: '150px',
              }}>🦆 vuecason</Heading>
              
            <Button variant="outline"
            >read the manifesto</Button>
          </div>
    </Flex>    
  );
}
