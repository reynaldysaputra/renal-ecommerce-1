import React, { Fragment } from 'react';
import {Box, Heading, SimpleGrid, Text, Wrap, WrapItem,Divider, Flex, Spacer, HStack, Link} from '@chakra-ui/core';
import {FiInstagram} from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai';

function TextFooter({...props}) {
    return <Text opacity='0.3' fontSize='xs' cursor='pointer' _hover={{textDecoration:'underline'}} {...props}></Text>
}

function Footer() {
    return(
        <Fragment>
            <SimpleGrid columns={[1,1,2,2]} gap={[0,0,10,10]} justifyContent='center'> 
                <Box>
                    <Heading fontSize='lg'>Helpful Links</Heading>
                    <Wrap spacing={[5,5,5,20]}>
                        <WrapItem>
                            <Box>
                                <TextFooter>About us</TextFooter>
                                <TextFooter>Delivery and Returns Policy</TextFooter>
                                <TextFooter>Help & FAQ</TextFooter>
                                <TextFooter>Service for professionals</TextFooter>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <TextFooter>About us</TextFooter>
                                <TextFooter>Delivery and Returns Policy</TextFooter>
                                <TextFooter>Help & FAQ</TextFooter>
                                <TextFooter>Service for professionals</TextFooter>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
                <Box>
                    <Heading fontSize='lg'>Contact Info</Heading>
                    <Wrap spacing={[5,5,5,20]}>
                        <WrapItem>
                            <Box>
                                <TextFooter fontWeight='semibold'>Oxford (UK)</TextFooter>
                                <TextFooter>1-3 Abbey Street</TextFooter>
                                <TextFooter>Eynsham</TextFooter>
                                <TextFooter>Oxford</TextFooter>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <TextFooter fontWeight='semibold'>Walnut, CA (USA)</TextFooter>
                                <TextFooter>340 S Lemon Ave #3358</TextFooter>
                                <TextFooter>California 91789</TextFooter>
                                <TextFooter>USA</TextFooter>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </SimpleGrid>

            <Divider w='full' mt={5} opacity='.3' />

            <Flex mb={5}>
                <Text fontSize={['15px','15px','sm','sm']} opacity='.3'>© 2020 Mass Impressions. Designed by Reynaldy Saputra</Text>

                <Spacer/>

                <HStack>
                    <Link href='https://www.instagram.com/reynaldysptr/'><FiInstagram/></Link>
                    <Link href='https://www.linkedin.com/in/reynaldy-saputra-61330115a/'><AiFillLinkedin/></Link>
                </HStack>
            </Flex>
        </Fragment>
    )
}

export default Footer;