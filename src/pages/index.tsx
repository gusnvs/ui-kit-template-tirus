import { Sidebar } from '../components/Sidebar'
import { ExamplesComponents } from '../components/ExamplesComponents'
import { Header } from '../components/Header'
import { Flex } from '@chakra-ui/react'


const Index = () => (

  <>
    {/* <ExamplesComponents /> */}
    {/* <Header/> */}
    <Flex direction={'row'} gap={10}>
      <Sidebar />
      <Flex>
        <h2>Conteudo aqui</h2>
      </Flex>
    </Flex>
  </>

)

export default Index
