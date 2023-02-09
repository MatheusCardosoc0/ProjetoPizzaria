import Head from 'next/head'
import Link from 'next/link'
import { CardLogo } from '../components/Logo'
import {
  Button,
  Container, Form, Input,
} from '../components/sharedstyles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Peperoni - login</title>
      </Head>
      <Form>
        <CardLogo />
        <Input width={300} padding={16}
        placeholder="Seu email"  />
        <Input width={300} padding={16}
        placeholder="Sua senha"   />
        <Button>Entrar</Button>
        <Link href={'/cadastro'}>Não possui uma conta? Cadastre-se.</Link>
      </Form>
    </Container>
  )
}
