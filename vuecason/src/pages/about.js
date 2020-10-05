import React from 'React';
import {  withPrefix } from 'gatsby';
import { Divider } from 'theme-ui';
import { Flex } from 'theme-ui';
import { Message } from 'theme-ui';
import { BrowserView, MobileView } from "react-device-detect";

import {
  Heading,
  Button,
  Image,
  Text,
  Link,
  Box,
} from 'rebass'

export default function About(){
  return (
    <div>
      <BrowserView>
      <header>
        <Heading
          fontSize={[7]}
          color='accent'
          style={{
            paddingTop: '50px',
            paddingLeft: '212px',
            paddingBottom: '50px',
          }}>🦆 vuecason 
        </Heading>
        </header>

        <Flex
          sx={{
            paddingLeft: '10px',
            flex: '200px',
            marginLeft: '600px',
          }}>
            <div
              style={{
                width: '60%',
                color: 'textColor'
              }}>
            Vuecason is developing a rapid metal additive manufacturing method with minimal post processing.
            We use a novel induction FFF process to print pure metal through a nozzle - like plastic. This allows us to heat and place pure metal in one single step, eliminating the need for debinding or sintering. 
            Our printer will be capable of producing large, high performance parts with really short lead times. 
          

            <Divider></Divider>
            <Link
              variant='nav'
              href='/manifesto'
            >
              Read the full manifesto here
            </Link>
            </div>
         </Flex>

         <footer
          bg='accent'
          height='50px'
          style={{
          }}>
          <Link
          variant='nav'
            href='/'
            style={{
              paddingLeft: '200px',
              paddingTop: '11px',
              position: 'fixed',
              alignItems:'center',
              bottom: '0',
            }}>
            Home
          </Link>
        </footer>
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
              margin: 'auto',
            }}>🦆 vuecason</Heading>
            </header>
          </div>
          <Flex
          sx={{
            paddingLeft: '10px',
            margin: 'auto',
            width: '80%',
            textAlign: 'center',
            color: 'textColor'
          }}>
            <div>
            Vuecason is developing a rapid metal additive manufacturing method with minimal post processing.
            We use a novel induction FFF process to print pure metal through a nozzle - like plastic. This allows us to heat and place pure metal in one single step, eliminating the need for debinding or sintering. 
            Our printer will be capable of producing large, high performance parts with really short lead times.  

            <Divider></Divider>
            <Link
              href='/manifesto'
              variant='nav'
            >
              Read the full manifesto here
            </Link>
            </div>
            </Flex>
          <footer
            bg='accent'
            height='50px'
            style={{
            }}>
            <Link
              href='/'
              variant='nav'
              style={{
                paddingLeft: '200px',
                paddingTop: '11px',
                position: 'fixed',
                alignItems:'center',
                bottom: '0',
              }}>
              Home
            </Link>
          </footer> 
        </MobileView>
    </div>
  );
}