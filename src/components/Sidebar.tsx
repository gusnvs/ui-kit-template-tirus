import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading,
    IconButton,
    useColorModeValue,
    HStack,
    Button
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'

import { FiBox, FiCode, FiHash, FiMinusSquare, FiDatabase, FiMinusCircle } from "react-icons/fi";
import { IoIosApps } from "react-icons/io";
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavItem } from './NavItem'


export const Sidebar = () => {

    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="md"
            borderRadius={navSize == "small" ? "20px" : "20px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            bg={useColorModeValue('gray.100', 'gray.700')}
            border={'solid red 1px'}
            transition={'all 0.4s cubic - bezier(0.175, 0.885, 0.32, 1.1)'}
            overflow={'hidden'}
        // transition={'ease-in-out 0.3s'} // apaga isso aqui <------------------------------
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                // alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
                alignItems={'center'}
            >

                <IconButton
                    aria-label='12px'
                    background="outline"
                    mt={5}
                    color={'text'}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />


                {/* {navSize == "small" ? (
                    <Text fontWeight='bold' color='primary' mt={4}>CA</Text>
                ) : (
                    <Text fontWeight='bold' color='primary' mt={4}>Controle de Acesso</Text>
                )} */}




                <NavItem navSize={navSize} icon={FiBox} title="Políticas de Acesso" />
                <NavItem navSize={navSize} icon={FiCode} title="Funções" />
                <NavItem navSize={navSize} icon={FiHash} title="Funções NBS" />
                <NavItem navSize={navSize} icon={FiMinusSquare} title="Níveis de Acesso" />
                <NavItem navSize={navSize} icon={FiDatabase} title="Schemas" />
                <NavItem navSize={navSize} icon={FiMinusCircle} title="Tipos de Acesso" />
                <NavItem navSize={navSize} icon={FiUser} title="Usuários" />

            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Flex mb={4} alignItems={'center'} px={1} >
                    <DarkModeSwitch size={'sm'} aria-label="Toggle Theme" />
                    {navSize == 'small' ? (<></>) : (
                        <>
                            {useColorModeValue(<Text color="gray" fontSize={'sm'} ml={4}>Light Mode</Text>, <Text color="gray" fontSize={'sm'} ml={4}>Dark Mode</Text>)}
                        </>
                    )}
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" px={1}>
                    <Avatar size="sm" src="avatar-1.jpg" name='Fulano da Silva' />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Fulano da Silva</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}