import { Box, Center, HStack, Text, VStack, Image } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import BusinessInfo from "../components/BusinessInfo";

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
                    <BusinessInfo/>
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