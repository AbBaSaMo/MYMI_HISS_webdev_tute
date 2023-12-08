import { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input, Text,
    Textarea,
    VStack,
    useToast
} from "@chakra-ui/react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast()

    const sendEmail = async () => {
        const invalidFields = []

        /* INPUT VALIDATIONS */
        if (name === '') {
            invalidFields.push('name must be provided');
        }

        if (message === '') {
            invalidFields.push('message must be provided');
        }

        if (email === '') {
            invalidFields.push('email must be provided');
        } else if (email.search(/^.+@.+$/) === -1) {
            invalidFields.push('email is not valid');
        }

        /* CREATE HOT TOASTS FOR INVALID FIELDS */
        if (invalidFields.length > 0) {
            invalidFields.forEach((errorMsg) => {
                toast({
                    title: 'Input error',
                    description: errorMsg,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            })

            return
        }

        const fetchOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),
        };

        /* SEND REQUEST THEN GENERATE TOAST BASED ON OUTCOME */
        fetch('http://localhost:4000/api/send-email', fetchOptions)
            .then((res) => res.json())
            .then((res) => {
                toast({
                    title: res.title,
                    description: res.msg,
                    status: res.status,
                    duration: 4000,
                    isClosable: true,
                })
            })
            .catch((error) => {
                toast({
                    title: 'Error',
                    description: "something went wrong :(",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            });

        /* RESET FIELDS */
        setEmail('');
        setName('');
        setMessage('');
    }

    return (
        <VStack w='55%' ml='auto'>
            <Text fontSize='3xl' as='b' mr='auto'>Send us a Message</Text>
            <FormControl isRequired>
                <FormLabel>Name:</FormLabel>
                <Input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <FormLabel>Email:</FormLabel>
                <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel>Message:</FormLabel>
                <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

            </FormControl>
            <Button
                colorScheme='black'
                variant='outline'
                mt='1em'
                ml='0px'
                mr='auto'
                onClick={sendEmail}
            >Submit</Button>
        </VStack>
    )
}

export default ContactForm;