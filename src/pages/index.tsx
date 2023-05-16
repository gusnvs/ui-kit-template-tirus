import {
  Link as ChakraLink,
  Text,
  Code,
  Button,
  Input,
  HStack,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  IconButton
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { InfoIcon, ChevronDownIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'

const Index = () => (
  <Container height="100vh" gap={10} >

    {/* Apague a parti daqui */}
    {/* Segue exemplo de alguns componentes e suas manipulações */}

    <Hero />
    <DarkModeSwitch />
    <Text color='text' fontSize='lg'>
      Alguns exemplos de componentes com a estilização Tirus
    </Text>
    <HStack gap={4} >
      <Button variant='primary'>Primario</Button>
      <Button variant='primary' size={'sm'}>Primario</Button>
      <Button variant='secundary' >Secundario</Button>
      <Button variant='secundary' size={'sm'}>Secundario</Button>
      <Button variant='outline' >Outline</Button>
      <Button variant='outline' size={'sm'}>Outline</Button>
      <Button variant='ghost' >Segunda Opção</Button>
      <Button variant='ghost' size={'sm'}>Segunda Opção</Button>
      <Button variant='cancel' >Cancelar</Button>
      <Button variant='cancel' size={'sm'}>Cancelar</Button>
    </HStack>
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Ação 1</MenuItem>
          <MenuItem>Ação 2</MenuItem>
          <MenuItem>Ação 3</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Seus Gatos
        </MenuButton>
        <MenuList>
          <MenuItem minH='48px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/100/100'
              alt='Fluffybuns the destroyer'
              mr='12px'
            />
            <span>Simon</span>
          </MenuItem>
          <MenuItem minH='40px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/120/120'
              alt='Simon the pensive'
              mr='12px'
            />
            <span>Stuart</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} colorScheme='pink'>
          Perfil
        </MenuButton>
        <MenuList>
          <MenuGroup title='Perfil'>
            <MenuItem>Minha conta</MenuItem>
            <MenuItem>Pagamentos </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title='Ajuda'>
            <MenuItem>Documentos</MenuItem>
            <MenuItem>Configurações</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>
          Menu
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Ordem' type='radio'>
            <MenuItemOption value='asc'>Ascendente</MenuItemOption>
            <MenuItemOption value='desc'>Descendente</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title='Opões' type='checkbox'>
            <MenuItemOption value='email'>Email</MenuItemOption>
            <MenuItemOption value='phone'>Celular</MenuItemOption>
            <MenuItemOption value='country'>País</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon fontSize='xl' />}
          variant='primary'
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} >
            Ação 1
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} >
            Ação 2
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} >
            Ação 3
          </MenuItem>
          <MenuItem icon={<EditIcon />} >
            Ação 4
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
    <HStack>
      <Input width={'sm'} placeholder='Digite aqui' />
      <Tooltip hasArrow label='Digite à esquerda' bg='primary' color='white'>
        <InfoIcon color='primary' h={5} w={5} />
      </Tooltip>
    </HStack>
    <Text color="text">
      Desenvolvido por
      <Code ml='2'>
        <ChakraLink isExternal href="https://www.instagram.com/gusnvs/" flexGrow={1} m={2}>
          @gusnvs
        </ChakraLink>
      </Code>
    </Text>

    {/* Final */}

  </Container>
)

export default Index
