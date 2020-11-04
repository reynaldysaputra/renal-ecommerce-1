import React, { Fragment } from 'react';
import {Container, Grid, Box, Image, Text, VStack, Heading, Button, SimpleGrid, Divider, useMediaQuery} from '@chakra-ui/core'
import chairs from '../../img/01_Halaman-newIn/header.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function NewIn() {
    const [isDesktop_Laptop_Tablet, isMobile] = useMediaQuery([
        '(min-width: 1024px)', '(min-width: 200px) and (max-width:767px)'
    ])

    return(
        <Fragment>
            <Container mt='3%' maxW={{sm:'sm' ,lg:'lg', md:'lg', xl:'lg'}} pos='relative' boxSizing='border-box'>
                {/* ------- CONTENT 1 -------*/}
                <Grid layerStyle='Container1NewIn'>
                    <VStack h={['auto','60vh','60vh','80vh']} bg='#F5F8FC' px={['0','0','0','0']}>
                        <Image src={chairs} alt='Chairs' mt={['25%', '40%', '30%', '20%']} w={['60%','70%','auto','auto']} ml={['0','0','-10%','-10%']} />

                        <Box pos={{base:'relative', xl:'absolute', md:'absolute', lg:'absolute'}} top={['0','30%','25%','15%']} left={['0','30%','55%','50%']} my={['10% !important','0%','0%','0%']} fontFamily='poppins' textAlign={['center','left','left','left']}>
                            <Text m='0' fontWeight='bold'>New Collection</Text>
                            <Heading fontWeight='bold' fontSize={{base:'4xl',md:'6xl !important',lg:'6xl',xl:'6xl'}} mb='15px' mt='15px !important'>Chairs & Stools</Heading>
                            <Text w={{base:"100%",md:'50%',lg:'50%',xl:'50%'}} fontWeight='thin' opacity='0.3' fontSize='sm'>Armchair upholstered in synthetic leather. Powder coated steel legs.</Text>
                        </Box>
                    </VStack>
                    <SimpleGrid h={['auto','60vh','60vh','80vh']} bg='#FFFBF8' alignContent='flex-end' textAlign='left'>
                        <Button rightIcon={<ArrowForwardIcon />} layerStyle='ButtonContainer' _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>SHOP NOW</Button>
                    </SimpleGrid>
                </Grid>

                {/* ------- CONTENT 2 -------*/}
                <Grid layerStyle='GridContent2' mt='5%' fontFamily='poppins'> 
                    <SimpleGrid h='auto'>
                        <Box textAlign={['center','left','center','left']}>
                            <Text fontWeight='bold'>On Sale</Text>
                            <Heading my={5}>Up to 20% off</Heading>
                            <Divider w={['80%','0','40%','80%']} border='2px' color='#FE7865' margin={['auto','0','auto','0']} />
                            <Text opacity='0.3' fontSize='xs'>Our entire Winter collection.</Text>
                        </Box>
                        <Box textAlign='center' mb={['5%']}>
                            {isDesktop_Laptop_Tablet ? 
                                <>
                                    <Text>Accessories</Text>
                                    <Text>Chairs & Stools</Text>
                                    <Text>Sofas & armchairs</Text>
                                    <Text>Tables</Text>
                                    <Text>Lighting</Text>
                                    <Text>Furnishings</Text>
                                </>
                                :
                                <Button w='50%' bg='#2C2E3F' color='white' rounded='0' border='0'   _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>Menu</Button>
                            }
                        </Box>
                    </SimpleGrid>
                    <Box w='full' h='80vh' bg='salmon'>

                    </Box>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default NewIn;