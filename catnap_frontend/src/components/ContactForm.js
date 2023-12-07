import {Button, FormControl, FormLabel, Input, Text, Textarea, VStack} from "@chakra-ui/react";

const ContactForm = () => {

    return (
        <VStack w='55%' ml='auto'>
            <Text fontSize='3xl' as='b' mr='auto'>Send us a Message</Text>
            <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input type='text'/>

                <FormLabel>Email:</FormLabel>
                <Input type='email'/>

                <FormLabel>Message:</FormLabel>
                <Textarea type=''></Textarea>

            </FormControl>
            <Button colorScheme='black' variant='outline' mt='1em' ml='0px' mr='auto'>Submit</Button>
        </VStack>
    )
}

export default ContactForm;