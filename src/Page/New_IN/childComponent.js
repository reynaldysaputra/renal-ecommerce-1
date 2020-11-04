import React, { Fragment } from 'react';
import {Box, VStack} from '@chakra-ui/core';

function Figure({size, ...props}) {
    return(
        <Fragment>
            <VStack w={size} h='max-content' position='relative' justify='flex-end' cursor='pointer' {...props}>
                
            </VStack>
        </Fragment>
    )
}

function Product({lengthStar, ...props}){
    return (
        <Fragment>
            <Box w='100%' h='max-content' p='15px' pt='5px' boxSizing='border-box' bg='white' textAlign='left !important' boxShadow='md' {...props}>

            </Box>
        </Fragment>
    )
} 

export {Figure, Product};

{/* <Grid templateColumns={['100%','100%','50% 50%','50% 50%']} gridColumnGap={5} gridRowGap={[7,5,0,0]} p='30px' boxSizing='border-box' w='80%' justifySelf='center' h='auto' >
<Figure size='80%' justifySelf='flex-end' bg='#BADAC4' mt={['','','10%','15%']}>
    <Image src={Tanaman} w='80%' mb='25%' mt={['','','-20%','-25%']} />
    <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Accessories</Box>
</Figure>
<Figure size='80%' justifySelf='flex-start' mt={['','','40%','45%']} bg='#DBEDF0'>
    <Image src={Sofa} w='80%' mb='25%' mt={['','','-20%','-25%']} />
    <Box bg='white' p='5px 10px' pos='absolute' bottom='0' right='0' boxSizing='border-box'>Sofas & armchairs</Box>
</Figure>
<Figure size='100%' justifySelf='flex-start' bg='#DBEDF0'>
    <Image src={Kursi_Bangku} w='100%'/>
    <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Chairs & Stools</Box>
</Figure>
<Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']} pt={['25%','','30%','35%']}>
    <Box w='full' position='absolute' top='0' zIndex='-1' h='80%' bg='#FFEDDB'/>
    <Image src={Meja} w='100%' />
    <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Tables & Stools</Box>
</Figure>
<Figure size='100%'  justifySelf='flex-start' mt={['','','10%','10%']}>
    <Box w='75%' position='absolute' top='0' right='0' zIndex='-1' h='70%' bg='#FFEDDB'/>
    <Image src={LampuBelajar} w='80%' />
    <Box bg='white' p='5px 10px' pos='absolute' top='0' right='0' m='0px !important' boxSizing='border-box'>Lighting</Box>
</Figure>
<Figure size='100%' justifySelf='flex-start' bg='#DBEDF0'>
    <Image src={BarangBekas} w='100%'/>
    <Box bg='white' p='5px 10px' pos='absolute' top='0' left='0' m='0px !important' boxSizing='border-box'>Chairs & Stools</Box>
</Figure>
</Grid> */}