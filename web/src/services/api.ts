import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { useDispatch } from 'react-redux'
import { signOut } from '../context/AuthContext'
import { AuthTokenError } from './errors/AuthResponseError'

export function setupApiClient(ctx = undefined){
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['@nextauth.token']}`
    }
  })

  api.interceptors.response.use(response => {
    return response
  }, (error: AxiosError) => {
    if(error.response.status === 401){
      //qualquer erro 401 deslogará o usuário
      if(typeof window !== undefined){
        // chamar função para deslogar usuário
      } else{
        return Promise.reject(new AuthTokenError())
      }
    }

    return Promise.reject(error)
  })

  return api
}