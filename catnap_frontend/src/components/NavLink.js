import { Link, Text } from "@chakra-ui/react";

const NavLink = ({href, text}) => {

    return (
        <Link href={href}>
            <Text fontSize='2xl'>
                {text}
            </Text>
        </Link>
    )
}

export default NavLink;