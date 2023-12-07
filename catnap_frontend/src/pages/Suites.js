import {Box, HStack, Text, VStack, Image} from "@chakra-ui/react";

const Suites = () => {

    const suites = [
        {
            imgSrc: "Cage_Standard-1920w.webp",
            suiteName: "Standard Suite",
            description: "Standard suites are great for older cats " +
                "or cats that don't do a lot of jumping " +
                "around. They have two levels with a " +
                "raised sleeping area with a special mesh " +
                "shelf that is great for sleeping on.",
            costDescription: [
                {
                    value: "$22",
                    unit: "per day for one cat"
                }
            ]
        }, {
            imgSrc: "Cage_Executive-1920w.webp",
            suiteName: "Executive Suite",
            description: "Large and spacious, the executive suite " +
                "has four different levels giving our guest " +
                "room to climb and explore. " +
                "With views of the gardens and places to hide,",
            costDescription: [
                {
                    value: "$24",
                    unit: "per day for one cat"
                }, {
                    value: "$19",
                    unit: "for each additional cat"
                }
            ]
        }, {
            imgSrc: "Cage_HiRise-1920w.webp",
            suiteName: "High Rise Suite",
            description: "The high rise suite stands 4 meters with " +
                "nine levels for your cat to " +
                "explore. Perfect for the cat that likes to " +
                "climb and see out over the entire garden.",
            costDescription: [
                {
                    value: "$26",
                    unit: "per day for one cat"
                }, {
                    value: "$19",
                    unit: "for each additional cat"
                }
            ]
        }, {
            imgSrc: "Cage_GardenSuite-1920w.webp",
            suiteName: "Garden Suite",
            description: "Our most popular suite of all. Perfect for " +
                "two cars or one active cat. The garden " +
                "suite is two rooms connected by an " +
                "overhead walk way, One half is in the " +
                "garden court yard, so they can come out " +
                "and see the birds up close. Both sides " +
                "have bedding.",
            costDescription: [
                {
                    value: "$28",
                    unit: "per day for one cat"
                }, {
                    value: "$19",
                    unit: "for each additional cat"
                }
            ]
        }, {
            imgSrc: "Presidential_Solid-1920w.webp",
            suiteName: "Presidential Suite",
            description: "The presidential comes with a people " +
                "sized bed with electric blanket, a couch, " +
                "doonas, pillows and lots of climbing " +
                "areas and stairs to explore. Perfect for " +
                "two or more cats or one very pampered kitty.",
            costDescription: [
                {
                    value: "$32",
                    unit: "per day for one cat"
                }, {
                    value: "$19",
                    unit: "for each additional cat"
                }
            ]
        }
    ]

    return (
        <VStack>
            <Box w='100%' h='40px'/>
            <Text fontSize='3xl' as='b'>Our Suites</Text>
            <hr/>
            <Text textAlign='center'>
                We also offer seven types of accommodation, designed to cater for cat needs as<br/>
                well as offering different standards of accommodation.<br/>
                Discounts for multiple cats to be lodged at Catnap Cattery are offered!
            </Text>
            <hr/>

            {suites.map((suite) =>
                <HStack w='600px' mb='2em'>
                    <Image
                        w='300px'
                        src={suite.imgSrc}
                        alt={'picture of a ' + suite.suiteName}
                    />
                    <VStack w='300px' ml='auto'>
                        <Text as='b'>{suite.suiteName}</Text>
                        <Text>{suite.description}</Text>
                        <Box h='0.2em'/>
                        {suite.costDescription.map((cost) => (
                            <HStack>
                                <Text as='b'>{cost.value}</Text>
                                <Text>{cost.unit}</Text>
                            </HStack>
                        ))}
                    </VStack>
                </HStack>
            )}

        </VStack>
    )
}

export default Suites;