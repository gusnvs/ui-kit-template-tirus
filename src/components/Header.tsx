import React from 'react';

import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    HStack,
    Center,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';


export const Header = () => {

    return (

        <>
            <Flex justifyContent='center'>
                <Box bg={useColorModeValue('gray.100', 'gray.700')} px={7} borderRadius='20px' width='95%' my={5} boxShadow='md' >
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'} >

                        <HStack spacing={8} alignItems={'center'} >
                            <Link fontWeight='bold' color='primary' href='/' _hover={{ textDecoration: 'none' }}>Nome do sistema</Link>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}>

                                <Text>Menu#1</Text>
                                <Text>Menu#2</Text>
                                <Text>Menu#3</Text>
                            </HStack>
                        </HStack>
                        <Flex alignItems={'center'}>
                            <HStack spacing={4}>
                                <Button size='sm' variant='outline'>Ação</Button>
                                <DarkModeSwitch />
                            </HStack>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

        </>


    )

}