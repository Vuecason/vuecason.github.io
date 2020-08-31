import React from 'react';
import { withPrefix } from 'gatsby';
import { Divider } from 'theme-ui';

import {
    Flex,
    Box,
} from 'reflexbox';

import {
    Heading,
    Button,
    Image, 
    Text,
    Link,
} from 'rebass'

export default function Manifesto(){
    return (
      <Flex>
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
                    paddingTop: '20px',
                    paddingLeft: '20px'
                  }}>
                    <Link
                      sx={{
                        display: 'inline-block',
                        fontWeight: 'bold',
                        px: 2,
                        py: 1,
                        color: 'inherit',
                      }}>
                      Introduction
                    </Link>
                  </div>
          </div>
          <Flex
            style={{
              backgroundColor:  'accent'
            }}>
            <Link
              href='/'
              style={{
                paddingLeft: '150px',
                display: 'inline-block',
                fontWeight: 'bold',
                px: 2,
                py: 1,
                color: 'inherit',
              }}>
              Home
            </Link>
          </Flex>
        </Flex>
    );
}