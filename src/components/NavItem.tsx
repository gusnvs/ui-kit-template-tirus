import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    Button,
} from '@chakra-ui/react'

export const NavItem = ({ icon, title, navSize }) => {
    return (
        <Flex
            mt={25}
            w="150px"
            justifyContent={'center'}
        >
            {/* <Menu placement="right">
                <Link
                    backgroundColor={'none'}
                    p={2}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "gray.400" }}
                    w={navSize == "large" && "100%"}

                >
                    <MenuButton w="100%">
                        <Flex >
                            <Icon as={icon} fontSize="xl" color={'primary'} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} fontSize={'sm'}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu> */}


            {/* <Menu >
                <Link
                    backgroundColor={'none'}
                    p={2}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "gray.400" }}
                    w={navSize == "large" && "100%"}

                >
                    <MenuButton w="100%" alignItems={'center'}>
                        <Flex alignItems={'center'} >
                            <Icon as={icon} fontSize="xl" color={'primary'} alignItems={'center'}/>

                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} fontSize={'sm'}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu> */}



            <Link bg={'none'} w={navSize == 'small' ? ('large') : ("100%")} p={2} borderRadius={'8px'}  _hover={{ textDecor: 'none', backgroundColor: "gray.400" }} >
                <Flex direction={'row'} alignItems={'center'} justifyContent={'flex-start'}  >
                    <Icon as={icon} fontSize="xl" color={'primary'} />

                    <Text ml={5} display={navSize == "small" ? "none" : "flex"} fontSize={'sm'}>{title}</Text>
                </Flex>


            </Link>


        </Flex>
    )
}