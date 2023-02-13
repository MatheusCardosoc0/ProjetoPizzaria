import Head from 'next/head'
import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layaut } from '../../components/Layaut'
import { DataAuthContext } from '../../context/AuthContext'
import { GetDataUserAuthenticated } from '../../context/fetchUserDataFunctions/GetDataUserAuthenticated'
import { canSSRAuth } from '../../utils/canSSRAuth'

const dashboard = () => {

  const user = useSelector(DataAuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetDataUserAuthenticated())
  }, [])

  return (
    <>
      <Head>
        <title>Pepperoni - dashborad</title>
      </Head>
      <Layaut>
        <p>{user.user.name}</p>
        <p>{user.user.email}</p>
        <p>{user.user.id}</p>
      </Layaut>
    </>
  )
}

export default dashboard

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
})