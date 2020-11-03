import React, { Fragment } from 'react';
import {Container, Grid, Box, Image, Text, VStack, Heading, Button, SimpleGrid, useBreakpoint} from '@chakra-ui/core'
import chairs from '../../img/01_Halaman-newIn/header.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function NewIn() {
    const TopTextContainer = useBreakpoint({base:'30%',xl:'30%',lg:'30%',md:'30%'});
    const LeftTextContainer = useBreakpoint({base:'0',xl:'30%',lg:'30%',md:'30%'});

    return(
        <Fragment>
            <Container mt='3%' maxW={{sm:'sm' ,lg:'lg', md:'lg', xl:'lg'}} pos='relative' boxSizing='border-box'>
                <Grid layerStyle='Container1NewIn'>
                    <VStack h={['auto','60vh','60vh','80vh']} bg='#F5F8FC' px={['0','0','0','0']}>
                        <Image src={chairs} alt='Chairs' ml={['10%','0','0','0']} mt={['25%', '40%', '30%', '20%']} w={['60%','70%','auto','auto']} />

                        <Box pos={{base:'relative', xl:'absolute', md:'absolute', lg:'absolute'}} top={['0','30%','25%','10%']} left={['0','30%','55%','50%']} my={['10% !important','0%','0%','0%']} fontFamily='poppins' textAlign={['center','left','left','left']}>
                            <Text m='0' fontWeight='bold'>New Collection</Text>
                            <Heading fontWeight='bold' fontSize={{base:'4xl',md:'6xl !important',lg:'6xl',xl:'6xl'}} mb='15px' mt='15px !important'>Chairs & Stools</Heading>
                            <Text w={{base:"100%",md:'50%',lg:'50%',xl:'50%'}} fontWeight='thin' opacity='0.3' fontSize='sm'>Armchair upholstered in synthetic leather. Powder coated steel legs.</Text>
                        </Box>
                    </VStack>
                    <SimpleGrid h={['auto','60vh','60vh','80vh']} bg='#FFFBF8' alignContent='flex-end' textAlign='left'>
                        <Button rightIcon={<ArrowForwardIcon />} layerStyle='ButtonContainer' _hover={{bg:'transparent', color:'#2C2E3F', border: '1px solid #2C2E3F'}}>SHOP NOW</Button>
                    </SimpleGrid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default NewIn;