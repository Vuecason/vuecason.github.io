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
        <Heading
          fontSize={[7]}
          color='accent'
          style={{
            paddingTop: '50px',
            paddingLeft: '212px',
            paddingBottom: '150px',
          }}>🦆 vuecason 
        </Heading>

        <Flex
          sx={{
            paddingLeft: '10px',
            flex: '200px',
            marginLeft: '600px',
          }}>
            <div
              style={{
                width: '60%',
              }}>
            Vuecason is developing a rapid metal additive manufacturing method with minimal post processing.
            We use a novel induction FFF process to heat and place pure metal in one single step, eliminating the need for debinding or sintering. 
          

            <Divider></Divider>
            <Link
              href='/manifesto'
              style={{
                fontWeight: 'bold',
              color: 'inherit',
              }}
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
            style={{
              paddingLeft: '200px',
              fontWeight: 'bold',
              color: 'inherit',
              paddingTop: '11px',
              position: 'fixed',
              alignItems:'center',
              bottom: '0',
              bg: 'accent',
            }}>
            Home
          </Link>
        </footer>
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
          <Flex
          sx={{
            paddingLeft: '10px',
            margin: 'auto',
            width: '80%',
            textAlign: 'center'
          }}>
            <div>
            Vuecason is developing a rapid metal additive manufacturing method with minimal post processing.
            We use a novel induction FFF process to heat and place pure metal in one single step, eliminating the need for debinding or sintering. 
          

            <Divider></Divider>
            <Link
              href='/manifesto'
              style={{
                fontWeight: 'bold',
              color: 'inherit',
              }}
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
              style={{
                paddingLeft: '200px',
                fontWeight: 'bold',
                color: 'inherit',
                paddingTop: '11px',
                position: 'fixed',
                alignItems:'center',
                bottom: '0',
                bg: 'accent',
              }}>
              Home
            </Link>
          </footer> 
        </MobileView>
    </div>
  );
}