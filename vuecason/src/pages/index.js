import React from 'react';
import { withPrefix } from 'gatsby';
import { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Divider } from 'theme-ui';
import { BrowserView, MobileView } from "react-device-detect";

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
            <header>
            <Heading
              fontSize={[7]}
              color='accent'
              style={{
                paddingLeft: '12px',
                paddingBottom: '150px',
              }}>🦆 vuecason</Heading>
            </header>
            <div  
              style={{
                paddingLeft:'104px',
              }}>
              <Text
                fontSize={[5]}
                color='accent'
                mb={5}
                fontWeight='bold'>
                  We're developing rapid metal 3D printers. 
              </Text>
              <Text
                color='accent'
                fontSize={[5]}
                mb={4}>
                  Minimal post processing required. 
              </Text>
              <Text
                color='textColor'
                fontSize={[4]}
                ml={5}
                mb={4}>
                  No debinding.
              </Text>
              <Text
                color='textColor'
                fontSize={[4]}
                ml={5}
                mb={4}>
                  No sintering.
              </Text> 
              <Text
                color='textColor'
                fontSize={[4]}
                ml={5}
                mb={3}>
                  No shrinkage.
              </Text>  
              <Divider />
              <Button variant="outline" 
                onClick={()=> {window.location.href = "/manifesto/"}}
                mt={3}
                sx={{
                  fontWeight:'bold',
                  color: 'accent',
                  '&:hover': {
                    color: 'background',
                  },
                }}
              >Manifesto</Button>
              
              <Button variant="outline" 
                onClick={()=> {window.location.href = "https://form.typeform.com/to/gPL8zy"}}
                mt={3}
                ml={3}
                sx={{
                  fontWeight:'bold',
                  color: 'accent',
                  '&:hover': {
                    color: 'background',
                  }, 
                }}
              >Stay in touch</Button>
              <Button variant="outline" 
                  onClick={()=> {window.location.href = "/about"}}
                  mt={3}
                  ml={3}
                  sx={{
                    fontWeight:'bold',
                    color: 'accent',
                    '&:hover': {
                      color: 'background',
                    },
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
          padding: '10px',
          textAlign: 'center',
        }}>
          <header>
          <Heading
          fontSize={[6]}
          color='accent'
          style={{
            paddingTop: '12px',
            paddingLeft: '12px',
            paddingBottom: '50px',
          }}>🦆 vuecason</Heading>
          </header>
       </div>
       <div  
              style={{
                paddingLeft:'24px',
                position: 'relative',
                marginTop: '0',
              }}>
              <Text
                fontSize={[5]}
                mb={4}
                fontWeight='bold'>
                  We're developing rapid metal 3D printers. 
              </Text>
              <Text
                fontSize={[5]}
                mb={4}
                color='textColor'>
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
                  No shrinkage.
              </Text>  
              <Divider />
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "/manifesto/"}}
                mt={3}
                sx={{
                  fontWeight:'bold',
                  color: 'accent',
                    '&:hover': {
                      color: 'background',
                    },
                }}
              >Manifesto</Button>
              
              <Button variant="outline" //FIXME: Why tf does this not work
                onClick={()=> {window.location.href = "https://form.typeform.com/to/gPL8zy"}}
                mt={3}
                ml={3}
                sx={{
                  fontWeight:'bold',
                  color: 'accent',
                    '&:hover': {
                      color: 'background',
                    },
                }}
              >Stay in touch</Button>
              <Button variant="outline" //FIXME: Why tf does this not work
                  onClick={()=> {window.location.href = "/about"}}
                  mt={3}
                  ml={3}
                  sx={{
                    fontWeight:'bold',
                    color: 'accent',
                    '&:hover': {
                      color: 'background',
                    },
                  }}
                >About</Button> 
            </div>
    </MobileView>
    </div>
  );
}
