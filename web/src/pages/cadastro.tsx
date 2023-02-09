import React, { FormEvent } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CardLogo } from '../components/Logo'
import {
  Button,
  Container, Form, Input,
} from '../components/sharedstyles'
import { useDispatch, useSelector } from 'react-redux'
import { DataAuthContext, signIn } from '../context/AuthContext'

const cadastro = () => {

  const user = useSelector(DataAuthContext)
  const dispatch = useDispatch()

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    dispatch(signIn())
  }


  return (
    <Container>
      <Head>
        <title>Peperoni - cadastro</title>
      </Head>
      {user.user.name}
      <Form onSubmit={handleSubmit}>
        <CardLogo />
        <Input width={300} padding={16}
          placeholder="Seu nome" />
        <Input width={300} padding={16}
          placeholder="Seu email" />
        <Input width={300} padding={16}
          placeholder="Sua senha" />
        <Button type='submit'>
          Cadastrar
        </Button>
        <Link href={'/'}>Já possui uma conta? faça o Login.</Link>
      </Form>
    </Container>
  )
}

export default cadastro