import React from 'react';
import {Accordion, AccordionItem, AccordionButton, Box, AccordionPanel} from '@chakra-ui/core';
import {MinusIcon, AddIcon} from '@chakra-ui/icons';
import {questionHelp} from '../Page/Help_page/questionHelp';

function QuestionHelp({...props}) {
    return(
        <>
            <Accordion allowMultiple {...props}>
                {questionHelp.map((item,index) => {
                    return <AccordionItem py='10px' key={index} >
                                    {({ isExpanded }) => (
                                        <>
                                            <AccordionButton bg='transparent' border='0px' borderBottom='1px solid #eaeaea' cursor='pointer'>
                                                <Box flex="1" textAlign="left">{item.question}</Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" color='#b4b4b4' />
                                                ) : (
                                                    <AddIcon fontSize="12px" color='#b4b4b4' />
                                                )}
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                })}
            </Accordion>
        </>
    )
}

export default QuestionHelp