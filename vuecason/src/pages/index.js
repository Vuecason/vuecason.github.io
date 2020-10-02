import React from 'react';
import { withPrefix } from 'gatsby';
import { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Divider } from 'theme-ui';
import { BrowserView, MobileView} from "react-device-detect";

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


export default function Home(){
  return (
    <div>
    <BrowserView>
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
            paddingLeft: '200px',
            paddingTop: '50px',    
          }}>
            <Heading
              fontSize={[7]}
              color='accent'
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
                  No waiting - cut 5 day lead time to 2.
              </Text>  
              <Divider />
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "/manifesto/"}}
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
              <Button variant="outline" //FIXME: Why tf does this not work
                  onClick={()=> {window.location.href = "/about"}}
                  mt={3}
                  ml={3}
                  sx={{
                    fontWeight:'bold',
                  }}
                >About</Button> 
            </div>
          </div>
    </Flex>    
    </BrowserView>
    <MobileView>
       <div
        style={{
          margin: 'auto',
          width: '80%',
          padding: '10px',
          textAlign: 'center',
        }}>
          <Heading
          fontSize={[6]}
          color='accent'
          style={{
            paddingTop: '12px',
            paddingLeft: '12px',
            paddingBottom: '50px',
          }}>🦆 vuecason</Heading>
       </div>
       <div  
              style={{
                paddingLeft:'24px',
              }}>
              <Text
                fontSize={[5]}
                mb={4}
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
                ml={3}
                mb={4}>
                  No debinding.
              </Text>
              <Text
                color='accent'
                fontSize={[4]}
                ml={3}
                mb={4}>
                  No sintering.
              </Text> 
              <Text
                color='accent'
                fontSize={[4]}
                ml={3}
                mb={3}>
                  No waiting - 2 day lead time.
              </Text>  
              <Divider />
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "/manifesto/"}}
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
              <Button variant="outline" //FIXME: Why tf does this not work
                  onClick={()=> {window.location.href = "/about"}}
                  mt={3}
                  ml={3}
                  sx={{
                    fontWeight:'bold',
                  }}
                >About</Button> 
            </div>
    </MobileView>
    </div>
  );
}
