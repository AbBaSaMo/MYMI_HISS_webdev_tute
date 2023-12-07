import {Box, HStack, Image, VStack, Text, Center, Circle} from "@chakra-ui/react";
import { useState } from 'react';
import AboutUs from "./AboutUs";
import Suites from "./Suites";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

const Home = () => {

    const [slide, setSlide] = useState(0)

    const customerReviews = [
        {
            imgSrc: "testimonial_image2.png",
            review: "You have no idea how much we appreciate what you did for us when we needed a " +
                "place for Snowflake. Words cannot express how grateful we were that we picked you from all the " +
                "places we found on the internet.",
            customerName: "Brigit, Tevor, Craig, Nicole, Brenton, Danielle & Snowflake"
        }, {
            imgSrc: "testimonial_image2.png",
            review: "Over the years I have had excellent service from Jarom Deeks and his " +
                "team at Catnap Cattery with regard to my cat Ozzie. I have always found " +
                "the cattery to be well kept and found the staff most friendly and always " +
                "most obliging to my cat's requirements.",
            customerName: "Julie S."
        }, {
            imgSrc: "testimonial_image2.png",
            review: "I would like to express my sincere gratitude and appreciation to you and your team " +
                "for looking after Jacque so well while he wa sin your care.",
            customerName: "Brownwyn J."
        }, {
            imgSrc: "testimonial_image2.png",
            review: "I have been boarding our three cats at Catnap Cattery often over the past few years, for " +
                "extended periods of time. I have always been very happy with the care of my cats.",
            customerName: "Kerry F."
        },
    ]

    const slides = customerReviews.map((review) => (
        <Center mt='2em' mb='1em'>
            <HStack w='600px' h='200px'>
                <Image
                    w='200px'
                    src={review.imgSrc}
                    alt='Picture of a cat'
                />
                <VStack ml='2em'>
                    <Text as='i'>{review.review}</Text>
                    <Text as='i'>{review.customerName}</Text>
                </VStack>
            </HStack>
        </Center>
    ))

    return (
        <Box w='100%'>
            <AboutUs/>
            <Suites/>
            <FAQ/>

            {slides[slide]}
            <Center mb='2em'>
                <HStack>
                    {slides.map((slide, index) => (
                        <Circle
                            size='7px'
                            bg='lightgrey'
                            onClick={() => {
                                setSlide(index);
                            }}
                        />
                    ))}
                </HStack>
            </Center>

            <ContactUs/>
        </Box>
    )
}

export default Home;