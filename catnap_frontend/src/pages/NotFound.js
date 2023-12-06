import {Text, Image, Box, VStack} from "@chakra-ui/react";

const NotFound = () => {

    return (
        <VStack>
            <Box w='100%' h='40px'/>
            <Text fontSize='3xl' as='b'>404</Text>
            <Image
                src='../404_cat.jpg'
                w='240px'
                h='180px'
                alt='a cat by Lau20fe obtained from
                https://en.m.wikipedia.org/wiki/File:Adorable-animal-cat-20787.jpg
                under creative commons license'
            />
            <Text>
                This page is missing
                <br/>
                Responds to ^(?!home$|about$|faq$|suites$|contact$).*$
            </Text>
        </VStack>
    )
}

export default NotFound;