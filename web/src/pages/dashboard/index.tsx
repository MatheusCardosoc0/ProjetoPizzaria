import Head from 'next/head'
import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Item, Order } from '../../@types/interfaces'
import { Dashboard } from '../../components/DashboardElements'
import { Layaut } from '../../components/Layaut'
import { Modal } from '../../components/Modal'
import { DataAuthContext } from '../../context/AuthContext'
import { GetDataUserAuthenticated } from '../../context/fetchUserDataFunctions/GetDataUserAuthenticated'
import { setupApiClient } from '../../services/api'
import { api } from '../../services/apiClient'
import { canSSRAuth } from '../../utils/canSSRAuth'



interface OrderProps {
  orders: Order[]
}

const dashboard = ({ orders: data }: OrderProps) => {

  const user = useSelector(DataAuthContext)
  const dispatch = useDispatch()

  const [modalView, setModalView] = useState(false)
  const [detailOrder, setDetailOrder] = useState<Item[]>([])
  const [orders, setOrders] = useState<Order[]>(data)

  useEffect(() => {
    dispatch(GetDataUserAuthenticated())
  }, [])

  async function openModal(id: string) {
    const response = await api.get(`http://localhost:3333/order/detail?order_id=${id}`)

   // console.log(response.data)
    setDetailOrder(response.data)
    setModalView(true)
  }

  async function finishOrder(id: string) {
    await api.put('/order/finish', {
      id
    })
    setOrders(data)
    setModalView(false)
    Refresh()
  }

  async function Refresh(){
    const response = await api.get('/order/list')

    setOrders(response.data)
  }

  return (
    <>
      <Head>
        <title>Pepperoni - dashborad</title>
      </Head>
      <Layaut>
        {(modalView && detailOrder.length > 0) && (
          <Modal items={detailOrder}
            setModalView={setModalView}
            finishOrder={finishOrder} />
        )}

        <Dashboard orders={orders}
          openModal={openModal} Refresh={Refresh} />
      </Layaut>
    </>
  )
}

export default dashboard

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get('/order/list')

 // console.log(response.data)

  return {
    props: {
      orders: response.data
    }
  }
})