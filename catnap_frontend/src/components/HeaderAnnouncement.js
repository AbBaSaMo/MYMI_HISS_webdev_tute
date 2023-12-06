import {Box, Center, Text} from "@chakra-ui/react";

const HeaderAnnouncement = () => {

    return (
        <Box bg='black' w='100%' h='30px' color='white' mb='0px'>
            <Center h='100%'>
                <Text fontSize='md'>
                    We are still open! Click here for latest Covid-19 Updates
                </Text>
            </Center>
        </Box>
    )
}

export default HeaderAnnouncement;