import React, { ChangeEvent, FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CardLogo } from '../components/Logo'
import {
  Button,
  Container, Form, Input,
} from '../components/sharedstyles'
import { useDispatch, useSelector } from 'react-redux'
import { DataAuthContext } from '../context/AuthContext'
import { RegisterProps } from '../@types/interfaces'
import { RegisterUser } from '../context/fetchUserDataFunctions/RegisterUser'
import { canSSRGuest } from '../utils/canSSRGuest'

const cadastro = () => {


  const [registerData, setRegisterData] = useState({
    email: '',
    name: '',
    password: ''
  } as RegisterProps)
  const dispatch = useDispatch()

  const HandleRegisterData = (event: ChangeEvent<HTMLInputElement>, name: 'name' | 'password' | 'email') => {
    setRegisterData({
      ...registerData,
      [name]: event.target.value
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { email, name, password } = registerData

    let data = {
      email,
      name,
      password
    } as RegisterProps

    dispatch(RegisterUser(data))
  }


  return (
    <Container>
      <Head>
        <title>Pepperoni - cadastro</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <CardLogo />

        <Input
          placeholder="Seu nome"
          onChange={e => HandleRegisterData(e, 'name')}
          value={registerData.name}
          required />

        <Input
          placeholder="Seu email"
          onChange={e => HandleRegisterData(e, 'email')}
          value={registerData.email}
          required />

        <Input
          placeholder="Sua senha"
          onChange={e => HandleRegisterData(e, 'password')}
          value={registerData.password}
          required />

        <Button type='submit'>
          Cadastrar
        </Button>
        <Link href={'/'}>Já possui uma conta? faça o Login.</Link>
      </Form>
    </Container>
  )
}

export default cadastro



export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})
