import Head from 'next/head'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignInProps } from '../@types/interfaces'
import { CardLogo } from '../components/Logo'
import {
  Button,
  Container, Form, Input,
} from '../components/sharedstyles'
import { DataAuthContext, signIn} from '../context/AuthContext'
import { LoginUser } from '../context/LoginUser'

export default function Home() {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  } as SignInProps)

  const handleLoginData = (event: ChangeEvent<HTMLInputElement>, name: 'email' | 'password') => {
    setLoginData({
      ...loginData,
      [name]: event.target.value
    })
  }

  const user = useSelector(DataAuthContext)
  const dispatch = useDispatch()


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const {email, password} = loginData

    let data: SignInProps = {
      email,
      password
    }

    dispatch(LoginUser(data))
  }

  return (
    <Container>
      <Head>
        <title>Peperoni - login</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <CardLogo />

        <Input width={300} padding={16}
          placeholder="Seu email"
          type={"email"}
          onChange={e => handleLoginData(e, 'email')}
          value={loginData.email}
          required />

        <Input width={300} padding={16}
          placeholder="Sua senha"
          type={"password"}
          onChange={e => handleLoginData(e, 'password')}
          value={loginData.password}
          required />

        <Button type='submit'>
          Entrar
        </Button>
        <Link href={'/cadastro'}>Não possui uma conta? Cadastre-se.</Link>
      </Form>
    </Container>
  )
}
