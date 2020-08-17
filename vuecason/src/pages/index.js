import React from 'react';
import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'emotion-theming'
import { Divider } from 'theme-ui'

import { 
  Flex,
  Box , 
} from 'reflexbox';
import { 
  Heading,
  Button,
  Image,
  Text,
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

            <div  
              style={{
                paddingLeft:'104px',
              }}>
              <Text
                fontSize={[5]}
                mb={5}
                fontWeight='bold'>
                  We're developing rapid metal 3D printers. 
              </Text>
              <Text
                fontSize={[5]}
                mb={4}>
                  Minimal post processing required. 
              </Text>
              <Text
                color='accent'
                fontSize={[4]}
                ml={5}
                mb={4}>
                  No debinding.
              </Text>
              <Text
                color='accent'
                fontSize={[4]}
                ml={5}
                mb={4}>
                  No sintering.
              </Text> 
              <Text
                color='accent'
                fontSize={[4]}
                ml={5}
                mb={3}>
                  What previously took 90 hours will take 10.
              </Text>  
              <Divider />
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "https://roamresearch.com/#/app/Divals_Learning/page/fPLO9Wx22"}}
                mt={3}
                sx={{
                  fontWeight:'bold',
                }}
              >Manifesto</Button>
              
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "https://form.typeform.com/to/gPL8zy"}}
                mt={3}
                ml={3}
                sx={{
                  fontWeight:'bold',
                }}
              >Stay in touch</Button>
            </div>
          </div>
    </Flex>    
  );
}
