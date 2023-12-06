import {Box, Center, Flex, HStack, Image, Link, Spacer, Text} from "@chakra-ui/react";
import NavLink from './NavLink';

const Header = () => {

    return (
        <Box w='100%' h='80px' mt='-10px'>
            <Box
                w='100%'
                h='100%'
                bg='black'
                opacity='60%'
                color='white'
            >
                <Flex justifyContent='space-around' alignItems='center' h='100%'>
                    <Spacer/>
                    <NavLink href='/about' text='ABOUT US'/>
                    <Spacer/>
                    <NavLink href='/suites' text='SUITES'/>
                    <Spacer/>
                    <Box w='200px'/>
                    <Spacer/>
                    <NavLink href='/faq' text='FAQ'/>
                    <Spacer/>
                    <NavLink href='/contact' text='CONTACT US'/>
                    <Spacer/>
                </Flex>
            </Box>

            <Box w='100%' h='100%'>
                <Flex justifyContent='space-around' alignItems='center' h='100%'>
                    <Spacer/>
                    <Link href='/'>
                        <Image
                            w='200px'
                            h='100px'
                            mt='-110px'
                            src='../catnap_logo.png'
                            alt='Sleeping cat logo'
                            style={{ filter: "opacity(1)" }}
                        />
                    </Link>
                    <Spacer/>
                </Flex>
            </Box>
        </Box>

    )
}

export default Header;