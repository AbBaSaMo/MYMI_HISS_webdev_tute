import {Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Center, Text} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";

const FAQ = () => {

    const faqs = [
        {
            question: "Are you guys still open amidst Covid-19?",
            answer: "Yes! We are still open"
        }, {
            question: "My cat has a particular diet they need to stick to/" +
                "is very picky - will your services still provide for them?",
            answer: "Most definitely! When you make a booking we will ask you " +
                "to let us know about any dietary requirements :)"
        }, {
            question: "Which suite should I select for my cat?",
            answer: "We would suggest matching your cat to a suite that best " +
                "accommodates their play/activity style"
        }, {
            question: "Am I guaranteed to get the accommodation of my choosing for my cat?",
            answer: "We'll try our best"
        }, {
            question: "Using a cattery for the first time can be a bit scary. How can I help my cat settle in?",
            answer: "We'd suggest bringing some toys they are familiar with to make it feel like home." +
                "Also for you to accompany your cat during the transition so they feel safe."
        },
    ]

    return (
        <Box bg='#F1F1F1' minW='100%' pb='5em'>
            <Box w='100%' h='40px'/>
            <Text fontSize='3xl' as='b'>FAQ</Text>
            <Box w='100%' h='40px'/>
            <Center>
                <Accordion allowToggle w='800px'>
                    {faqs.map((question => (
                        <AccordionItem>
                            {({isExpanded}) => (
                                <div>
                                    {/* QUESTION */}
                                    <h2>
                                        <AccordionButton>
                                            { isExpanded ?
                                                <MinusIcon fontSize='12px'mr='1em'/> :
                                                <AddIcon fontSize='12px'mr='1em'/>
                                            }

                                            <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                                                {question.question}
                                            </Box>
                                        </AccordionButton>
                                    </h2>

                                    {/* ANSWER */}
                                    <AccordionPanel pb='4'>
                                        <Text textAlign='left' ml='1.5em' mr='auto' >
                                            {question.answer}
                                        </Text>
                                    </AccordionPanel>
                                </div>
                            )}
                        </AccordionItem>
                    )))}
                </Accordion>
            </Center>
        </Box>
    )
}

export default FAQ;