import { Box, VStack, Text, Image, Spacer, Link } from "@chakra-ui/react";

const Footer = () => {

    return (
        <Box w='100%' h='250px' bg='#9EA39F'>
            <VStack>
                <Spacer/>
                <Image
                    w='200px'
                    h='100px'
                    src='../catnap_logo.png'
                    alt='Sleeping cat logo'
                />
                <Text fontSize='md' as='i'>
                    2/44 Rushdale Street <br/>
                    Knoxfield, VIC 3180 <br/>
                    03 9753 2933 <br/>
                    contact@catnapcattery.com.au
                </Text>

                <Link href='https://www.facebook.com/CatnapCattery' isExternal>
                    <Image
                        boxSize='20px'
                        src='../facebook_icon.png'
                        alt='facebook icon'
                    />
                </Link>
            </VStack>
        </Box>
    )
}

export default Footer;