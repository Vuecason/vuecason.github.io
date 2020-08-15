import React from 'react'
import { withPrefix } from 'gatsby';
import { Flex, Box } from 'reflexbox'

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
        backgroundPositionY: '50%',
        backgroundSize: '50%',
      }}>
        <div
          style={{
            paddingLeft:'100px',
            paddingTop: '50px',
          }}>
            <h1>vuecason</h1>
          </div>
    </Flex>    
  );
}
