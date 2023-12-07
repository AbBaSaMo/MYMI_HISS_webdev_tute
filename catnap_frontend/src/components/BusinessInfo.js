import {Box, Center, HStack, Text, VStack} from "@chakra-ui/react";

const BusinessInfo = () => {

    return (
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
    )
}

export default BusinessInfo;