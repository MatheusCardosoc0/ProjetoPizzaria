import Head from 'next/head'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Layaut } from '../../components/Layaut'
import { Button, Form, Input, Select, Textarea } from '../../components/FormElements'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { PhotoArea } from '../../components/PhotoArea'
import { setupApiClient } from '../../services/api'
import { toast } from 'react-toastify'
import { api } from '../../services/apiClient'

type category = {
  id: string
  name: string
}

interface productProps {
  categoryList: category[]
}

type formData = {
  name: string
  price: string
  description: string
}

interface CreateProduct extends formData {
  file: any
  category_id: string
}

const index = ({ categoryList }: productProps) => {

  const [avatarUrl, setAvatarUrl] = useState('')
  const [categories, setCategpries] = useState(categoryList || [])
  const [imageAvatar, setImageAvatar] = useState(null)
  const [categorySelected, setCategorySelected] = useState(0)
  const [formData, setFormData] = useState({
    description: '',
    name: '',
    price: ''
  } as formData)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {

    //console.log(e.target.files)

    if (!e.target.files) {
      return
    }

    const image = e.target.files[0]

    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageAvatar(image)
      setAvatarUrl(URL.createObjectURL(image))
    }
  }

  function handleFormData(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: 'name' | 'description' | 'price') {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(imageAvatar)
    console.log(formData)
    console.log(categorySelected)

    try {

      if (!formData || imageAvatar == null) {
        toast.error("preencha os campos")
        return
      }

      const data = new FormData()

      data.append("name", formData.name)
      data.append("price", formData.price)
      data.append("description", formData.description)
      data.append("category_id", categories[categorySelected].id)
      data.append("file", imageAvatar)

      await api.post('/product',data)

      toast.success("Produto cadastrado com sucesso")

    } catch (error) {
      console.log(error)
      toast.error("erro ao criar")
    }

    setAvatarUrl(null)
    setFormData({
      description: '',
      name: '',
      price: ''
    })
    setCategorySelected(0)
  }

  return (
    <>
      <Head>
        <title>Pepperoni novo produto</title>
      </Head>
      <Layaut>
        <h2>Criar novo produto</h2>
        <Form onSubmit={handleSubmit}>
          <PhotoArea avatarUrl={avatarUrl} handleFiles={handleFile} />
          <Select width={500} padding={8}
            value={categorySelected}
            onChange={(e) => setCategorySelected(Number(e.target.value))}>
            {categoryList &&
              categoryList.map((category, index) => (
                <option key={category.id} value={index}>
                  {category.name}
                </option>
              ))}
          </Select>

          <Input width={500}
            placeholder={"Nome do produto"}
            onChange={e => handleFormData(e, 'name')}
            value={formData.name}
            required />

          <Input width={500}
            placeholder={"Preço do produto"}
            onChange={e => handleFormData(e, 'price')}
            value={formData.price}
            required />

          <Textarea width={500} heigth={140}
            placeholder="Descrição do produto"
            onChange={(e) => handleFormData(e, 'description')}
            value={formData.description}
            required />

          <Button width={500} color="green"
            type='submit'>
            Criar
          </Button>
        </Form>
      </Layaut>
    </>
  )
}

export default index


export const getServerSideProps = canSSRAuth(async (ctx) => {

  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get('/categories')

  //console.log(response.data)

  return {
    props: {
      categoryList: response.data
    }
  }
})