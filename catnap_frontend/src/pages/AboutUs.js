import {Image, Center, Text, VStack, Box, HStack} from "@chakra-ui/react";

const AboutUs = () => {

    return (
        <Box minW='100%'>
            <Box w='100%' h='40px'/>
            <Center>
                <HStack >
                    <VStack size='300px' minW='300px'>
                        <Text fontSize='3xl' as='b'>Who Are We?</Text>
                        <Image
                            w='300px'
                            h='300px'
                            src='../about_us_image.png'
                            alt='An image of a cat infront of a teddy.
                         A dog looms in the background'
                        />
                        <Text fontSize='s' as='i'>
                            Two of our favourite guests-
                            <br/>
                            See more on our Facebook!
                        </Text>
                    </VStack>
                    <Box w='40px'/>
                    <VStack w='600px'>
                        <Box/>
                        <Text fontSize='xl' textAlign='left'>
                            Catnap Cattery is a luxury accommodation for cats with a <br/>
                            facility which is truly unique in Melbourne's East Side. <br/>
                            We offer a range of accommodation options for cats in a <br/>
                            secure and modern facility with support services. <br/>
                            <br/>
                            Catnap Cattery provides a peaceful environment for cats, <br/>
                            reducing the stress of separation through our carefully <br/>
                            maintained facilities to ensure your cats are properly cared for
                        </Text>
                        <Box/>
                    </VStack>
                </HStack>
            </Center>
        </Box>

    )
}

export default AboutUs;