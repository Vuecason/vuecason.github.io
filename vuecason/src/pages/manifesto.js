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
      <div>
        <Heading
          fontSize={[7]}
          color='accent'
          style={{
            paddingTop: '50px',
            paddingLeft: '212px',
            paddingBottom: '150px',
          }}>🦆 vuecason 
        </Heading>

        <div 
        style={{
          paddingLeft: '56px',
          display: 'grid',
          gridGap: 15,
          paddingBottom: '100px',
        }}>
        <div>
          <Link
            sx={{ 
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Introduction
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Significance of Machine Tooling
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            State of modern machining
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Why additive manufacturing still sucks
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            What happened to the 3d printing revolution?
          </Link>
        </div>
        
        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Problems with current AM 
          </Link>
        </div>
        
        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Why additive manufacturing still sucks
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Problems with mechanical properties
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Practical use cases 
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Potential advantages of AM
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Overcoming rate limits
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Reducing part costs
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Why AM is underated
          </Link>
        </div>

        <div>
          <Link
            sx={{
              fontWeight: 'bold',
              color: 'primary',
            }}>
            Vuecason will solve all these problems
          </Link>
        </div>

        </div>
        <Flex
          bg='accent'
          height='50px'>
          <Link
            href='/'
            style={{
              paddingLeft: '200px',
              fontWeight: 'bold',
              paddingTop: '11px',
              px: 2,
              py: 1,
              color: 'inherit',
            }}>
            Home
          </Link>
        </Flex>
    </div>
  );
}