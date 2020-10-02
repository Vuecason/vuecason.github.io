import React from 'react';
import { withPrefix } from 'gatsby';
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

export default function Manifesto(){
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
              marginLeft: '100px',
            }}>

            <aside
              sx={{
                flexBasis: 'sidebar',
                position: '-webkit-sticky',
                position: 'sticky',
                float: 'left',
                marginLeft: '30px',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                clear: 'both',
                width: '300px',
              }}>

                <div
                  sx={{
                    width: '300px', 
                  }}>
                  <div>
                  <Link
                    sx={{ 
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      clear: 'both',
                    }}>
                    Introduction
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      clear: 'both',
                      width: '300px',
                      marginBottom: '12px',
                    }}>
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    State of modern machining
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Why additive manufacturing still sucks
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    What happened to the 3d printing revolution?
                  </Link>
                </div>
                
                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Problems with current AM 
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Problems with mechanical properties
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Practical use cases 
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Potential advantages of AM
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Overcoming rate limits
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Reducing part costs
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Why AM is underated
                  </Link>
                </div>

                <div>
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                    Vuecason will solve all these problems
                  </Link>
                </div>
              </div>
            </aside>

            <main
              sx={{
                flexGrow: 9999,
                flexBasis: 0,
                minWidth: 0,
                float: 'right',
              }}>
              <div
                style={{
                  paddingLeft: '180px',
                  width: '60%',
                  paddingBottom:'50px'
                }}>
                  <Message>
                    This page is undergoing revisions
                  </Message>      
                  <h1 id = 'introduction'>Introduction</h1>
                  Machine tools like lathes unlocked high precision for larger parts, enabling the creation of inventions such as the steam engine, ultimately giving birth to the industrial revolution.
                  metal AM might become the ultimate machine tool, with more automation and flexibility than the past.  
                  Additive manufacturing can serve as an abstraction layer for manufacturing, so design engineers spend less time thinking about manufacturing.
                  Fast, reliable, and cost effective metal AM will allow for iteration in production, localized production, and more sophisticated parts.
                  By printing metals like plastics, many issues of existing metal AM processes can be avoided. 
                  <Divider></Divider>
                  <h1>Significance of machine tooling</h1>
                  A machine tool is a machine that helps build machines and products
                  machine tools are an important underlying part of any industrial society and enable the industrial capacity of any nation.  The consumption of machine tools is a strong indicator of the overall manufacturing capacity of a nation.
                  The proliferation of machine tools, such as CNC machines enabled the increases in automation seen since the 1960's. 
                  To honor the history of machine tooling, Vuecason is named after Jacques de Vaucanson, inventor of the all-metal lathe in 1751. Prior to Vaucanson's lathe, all-metal lathes were only utilized for watchmaking. These lathes were too small to make the larger parts that enabled the industrial revolution. Larger lathes made from wood were unable to provide the precision either. Without the the large all-metal lathe, James Watt's steam engine wouldn't exist. In a way the change in the functional use of lathes isn't all that different from our goals. Current metal AM(primarily binder jet), is intended for precise, small parts - the Vuecason printer will unlock greater precision in larger parts.
                  The fundemental question: How can we make it easier and faster to shape and place metal?
                  <Divider></Divider>
                  <h1>State of modern machining</h1>
                  Modern manufacturing paradigms such as just in time manufacturing tradeoff resilience with efficiency. Production has become hyper-concentrated.
                  Supply chains become vulnerable to disruptions from black swan events.
                  Increased logistics overhead costs are a result of complex supply chains.
                  A strong machine tooling industry has taken off in China, whereas countries such as Brazil and India are not able to sustain a strong machine tool industry.
                  <Divider></Divider>
                  <h1>Why additive manufacturing still sucks</h1>
                  AM companies have optimized the wrong constraints. Optimizing to minimize print time at the cost of more intense post-processing actually increases lead times. The best way to print metals is like plastics. Metal AM isn't even good for prototyping if there is an intent to manufacture. An example: Tesla will not 3d print their chassis to prototype it. Metal AM needs to be fast enough to scale to low volume manufacturing. Then the same print methodology for protoyping can go direclty into manufacturing and the physical properties on either process align. Without that, AM is only good for one off prototyping.
                  <Divider></Divider>
                  <h1>What happened to the 3D printing revolution</h1>
                  In 2015, Morgan Stanley forecasted additive manufacturing would be worth as high as $21.3 billion by 2020. Ark invest predicted the market would be valued at $41 billion in 2020. As of 2019, the additive manufacturing market was only valued at $12 billion.
                  Popsci media has overhyped metal AM because it doesn't talk about the time, expense, and difficulty of post processing parts.
                  <Divider></Divider>
                  <h1>Problems with current metal AM</h1>
                  Larger parts are not possible with binder materals as the parts shrink during the sintering process. 
                  A binder jet part, the fastest currentl metal AM method, takes several days to post-process.
                  <Divider></Divider>
                  <h1>Problems with mechanical properties</h1>
                  Anisotropic parts are produced due to the lamination of layers.
                  It is extremely difficult to design and simulate anisotropic parts as the tensile strength can vary along layer lines.
                  Anisotropic parts are extremely undesirable from the perspective of a design engineer.
                  <Divider></Divider>
                  <h1>Practical use cases</h1>
                  Metal additive manufacturing will have lower part costs compared to CNC machines for hollow shell parts, or parts with complex geometry.
                  <Divider></Divider>
                  <h1>Potential advantages of AM</h1>
                  Cost reductions can be derived from eliminating steps in part post-processing that are present in other metal AM processes.
                  Large metal printed parts can allow the ability to consolodate large complex assemblies into one single part. 70% of all labor cost is in fasteners. This can be grealtly reduced with metal AM.
                  <Divider></Divider>
                  <h1>Overcoming Rate limits</h1>
                  Metal printing is rate limited thermally, and in motion control. The main rate limit to overcome is in heat transfer. Vuecason has solved the thermal rate limit by using an inductin coil to heat the metal.
                  <Divider></Divider>
                  <h1>Why Vuecason can solve these problems</h1>
                  Vuecason is solving metal printing under the correct constraints. We optimize for minimal lead time and cost instead of optimizing for minimal print time at all costs. By placing and melting the material in one step, the Vuecason printer can place and heat material continously in one process, eliminating the need for sintering and debinding.
              </div>
            </main>
          </Flex>
            
          <footer
            bg='accent'
            height='50px'>
            <Link
              href='/'
              style={{
                paddingLeft: '200px',
                fontWeight: 'bold',
                color: 'inherit',
                paddingTop: '11px',
                paddingBottom: '11px',
                alignItems:'center',
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
       <div
        style={{
          paddingLeft: '25px',
          width: '90%',
          paddingBottom:'50px'
        }}>
          <Message>
            This page is undergoing revisions
          </Message>      
          <h1 id = 'introduction'>Introduction</h1>
          Machine tools like lathes unlocked high precision for larger parts, enabling the creation of inventions such as the steam engine, ultimately giving birth to the industrial revolution.
          metal AM might become the ultimate machine tool, with more automation and flexibility than the past.  
          Additive manufacturing can serve as an abstraction layer for manufacturing, so design engineers spend less time thinking about manufacturing.
          Fast, reliable, and cost effective metal AM will allow for iteration in production, localized production, and more sophisticated parts.
          By printing metals like plastics, many issues of existing metal AM processes can be avoided. 
          <Divider></Divider>
          <h1>Significance of machine tooling</h1>
          A machine tool is a machine that helps build machines and products
          machine tools are an important underlying part of any industrial society and enable the industrial capacity of any nation.  The consumption of machine tools is a strong indicator of the overall manufacturing capacity of a nation.
          The proliferation of machine tools, such as CNC machines enabled the increases in automation seen since the 1960's. 
          To honor the history of machine tooling, Vuecason is named after Jacques de Vaucanson, inventor of the all-metal lathe in 1751. Prior to Vaucanson's lathe, all-metal lathes were only utilized for watchmaking. These lathes were too small to make the larger parts that enabled the industrial revolution. Larger lathes made from wood were unable to provide the precision either. Without the the large all-metal lathe, James Watt's steam engine wouldn't exist. In a way the change in the functional use of lathes isn't all that different from our goals. Current metal AM(primarily binder jet), is intended for precise, small parts - the Vuecason printer will unlock greater precision in larger parts.
          The fundemental question: How can we make it easier and faster to shape and place metal?
          <Divider></Divider>
          <h1>State of modern machining</h1>
          Modern manufacturing paradigms such as just in time manufacturing tradeoff resilience with efficiency. Production has become hyper-concentrated.
          Supply chains become vulnerable to disruptions from black swan events.
          Increased logistics overhead costs are a result of complex supply chains.
          A strong machine tooling industry has taken off in China, whereas countries such as Brazil and India are not able to sustain a strong machine tool industry.
          <Divider></Divider>
          <h1>Why additive manufacturing still sucks</h1>
          AM companies have optimized the wrong constraints. Optimizing to minimize print time at the cost of more intense post-processing actually increases lead times. The best way to print metals is like plastics. Metal AM isn't even good for prototyping if there is an intent to manufacture. An example: Tesla will not 3d print their chassis to prototype it. Metal AM needs to be fast enough to scale to low volume manufacturing. Then the same print methodology for protoyping can go direclty into manufacturing and the physical properties on either process align. Without that, AM is only good for one off prototyping.
          <Divider></Divider>
          <h1>What happened to the 3D printing revolution</h1>
          In 2015, Morgan Stanley forecasted additive manufacturing would be worth as high as $21.3 billion by 2020. Ark invest predicted the market would be valued at $41 billion in 2020. As of 2019, the additive manufacturing market was only valued at $12 billion.
          Popsci media has overhyped metal AM because it doesn't talk about the time, expense, and difficulty of post processing parts.
          <Divider></Divider>
          <h1>Problems with current metal AM</h1>
          Larger parts are not possible with binder materals as the parts shrink during the sintering process. 
          A binder jet part, the fastest currentl metal AM method, takes several days to post-process.
          <Divider></Divider>
          <h1>Problems with mechanical properties</h1>
          Anisotropic parts are produced due to the lamination of layers.
          It is extremely difficult to design and simulate anisotropic parts as the tensile strength can vary along layer lines.
          Anisotropic parts are extremely undesirable from the perspective of a design engineer.
          <Divider></Divider>
          <h1>Practical use cases</h1>
          Metal additive manufacturing will have lower part costs compared to CNC machines for hollow shell parts, or parts with complex geometry.
          <Divider></Divider>
          <h1>Potential advantages of AM</h1>
          Cost reductions can be derived from eliminating steps in part post-processing that are present in other metal AM processes.
          Large metal printed parts can allow the ability to consolodate large complex assemblies into one single part. 70% of all labor cost is in fasteners. This can be grealtly reduced with metal AM.
          <Divider></Divider>
          <h1>Overcoming Rate limits</h1>
          Metal printing is rate limited thermally, and in motion control. The main rate limit to overcome is in heat transfer. Vuecason has solved the thermal rate limit by using an inductin coil to heat the metal.
          <Divider></Divider>
          <h1>Why Vuecason can solve these problems</h1>
          Vuecason is solving metal printing under the correct constraints. We optimize for minimal lead time and cost instead of optimizing for minimal print time at all costs. By placing and melting the material in one step, the Vuecason printer can place and heat material continously in one process, eliminating the need for sintering and debinding.
      </div>
       <footer
            bg='accent'
            height='50px'>
            <Link
              href='/'
              style={{
                paddingLeft: '200px',
                fontWeight: 'bold',
                color: 'inherit',
                paddingTop: '11px',
                paddingBottom: '11px',
                alignItems:'center',
              }}>
              Home
            </Link>
          </footer>
      </MobileView>
    </div>
  );
}