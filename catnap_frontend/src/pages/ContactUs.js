import { Box, Center, HStack, Text, VStack, Image } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {

    return (
        <Box bg='#F1F1F1' minW='100%'>
            <Box w='100%' h='40px'/>
            <VStack>
                <Text fontSize='3xl' as='b'>Contact Us</Text>

                <Text as='b' align='left'>
                    Booking your cat into Catnap Cattery is very straightforward. Call us or contact us online to arrange
                    your <br/> booking or if you have any other enquiries on our services
                </Text>
            </VStack>

            <Center>
                <HStack w='800px'>
                    {/* BUSINESS INFO */}
                    <VStack w='35%' pt='3em'>
                        <Box borderWidth='5px' borderColor='black' mb='0.75em' p='1.5em' w='100%'>
                            <Text fontSize='3xl' as='b'>
                                Opening<br/>
                                Hours
                            </Text>
                            <Box h='1em'/>
                            <Text fontSize='lg'>
                                Mon-Fri: 9am-5pm<br/>
                                Sat: 10am-3pm<br/>
                                Sunday: Closed
                            </Text>
                        </Box>

                        <Box borderWidth='5px' borderColor='black' p='1em' w='100%'>
                            <Center>
                                <HStack>
                                    <Text fontSize='lg' as='b'>Phone: </Text><Text fontSize='lg'>03 9753 2933</Text>
                                </HStack>
                            </Center>
                        </Box>
                    </VStack>

                    <ContactForm/>
                </HStack>
            </Center>


            {/* BUSINESS LOCATION MAP */}
            <Box h='2em'/>
            <VStack>
                <Text fontSize='lg'>You can also arrange a booking in person at our Knoxfield facility</Text>
                <Image
                    w='800px'
                    mt='1em'
                    mb='3em'
                    src='../company_location.png'
                    alt='a map showcasing our location'
                />
            </VStack>

        </Box>
    )
}

export default ContactUs;