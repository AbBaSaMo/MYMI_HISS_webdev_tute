import {Box} from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import Suites from "./Suites";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

const Home = () => {

    return (
        <Box w='100%'>
            <AboutUs/>
            <Suites/>
            <FAQ/>

            <ContactUs/>
        </Box>
    )
}

export default Home;