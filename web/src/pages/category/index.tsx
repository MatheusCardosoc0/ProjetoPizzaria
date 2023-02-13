import Head from 'next/head'
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Layaut } from '../../components/Layaut'
import { Button, Form, Input } from '../../components/sharedstyles'
import { api } from '../../services/apiClient'

const index = () => {

  const [categoryName, setCategoryName] = useState('')

  function CreateCategory(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {
      api.post('/new_category', {
        name: categoryName
      })

      toast.success('categoria cadastrada')
    } catch (error) {
      console.log('erro ao criar uma cateogoria nova')
      toast.error('Não foi possivel cadastrar a categoria')
    }
  }

  return (
    <>
      <Head>
        <title>Pepperoni - category</title>
      </Head>
      <Layaut>
        <Form onSubmit={CreateCategory}>
          <h2>Nova Categoria</h2>
          <Input width={500} placeholder='Nome da categoria'
          onChange={e => setCategoryName(e.target.value)}
          value={categoryName}
          required />

          <Button width={500} color='green'
          type='submit'>
            Cadastrar
          </Button>
        </Form>
      </Layaut>
    </>
  )
}

export default index