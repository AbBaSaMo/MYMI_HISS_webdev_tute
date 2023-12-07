import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react";

const ContactUs = () => {

    return (
        <Box>
            <Box w='100%' h='40px'/>
            <VStack>
                <Text fontSize='3xl' as='b'>Contact Us</Text>

                <Text as='b' align='left'>
                    Booking your cat into Catnap Cattery is very straightforward. Call us or contact us online to arrange
                    your <br/> booking or if you have any other enquiries on our services
                </Text>
            </VStack>

            <HStack>
                {/* BUSINESS INFO */}
                <VStack w='35%' pt='2em'>
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

                    <Box borderWidth='5px' borderColor='black' pt='1em' pb='1em' w='100%'>
                        <Text fontSize='lg' as='b'>Phone: </Text><Text fontSize='lg'>03 9753 2933</Text>
                    </Box>
                </VStack>

                {/* CONTACT FORM */}
                <VStack w='55%' ml='auto'>
                    <Text fontSize='3xl' as='b' mr='auto'>Send us a Message</Text>
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input type='text'/>

                        <FormLabel>Email:</FormLabel>
                        <Input type='email'/>

                        <FormLabel>Message:</FormLabel>
                        <Textarea type=''></Textarea>

                        <Button colorScheme='white' variant='ghost'>Submit</Button>
                    </FormControl>
                </VStack>

            </HStack>

            {/* BUSINESS LOCATION MAP */}
            <Box h='2em'/>
            <Text fontSize='lg'>You can also arrange a booking in person at our Knoxfield facility</Text>
            <Box>[MAP GOES HERE]</Box>
        </Box>
    )
}

export default ContactUs;