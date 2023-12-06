import {Box, Center, Text} from "@chakra-ui/react";

const HeaderAnnouncement = () => {

    return (
        <Box bg='black' w='100%' h='50px' color='white'>
            <Center h='100%'>
                <Text fontSize='xl'>
                    We are still open! Click here for latest Covid-19 Updates
                </Text>
            </Center>
        </Box>
    )
}

export default HeaderAnnouncement;