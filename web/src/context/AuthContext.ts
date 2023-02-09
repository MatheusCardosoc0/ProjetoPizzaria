import { createSlice } from "@reduxjs/toolkit";

interface AuthContextData{
  user: UserProps
  isAuthenticated: boolean
}

type UserProps = {
  id: string
  name: string
  email: string
}

type SignInProps = {
  email: string
  password: string
}

const initialState = {
  user: {
    name: 'Jhon',
    email: 'math@gmail.com',
    id: '1'
  },
  isAuthenticated: false
} as AuthContextData

const AuthContext = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {
    signIn(){
      alert('clicou')
    }
  }
})

export const { signIn } = AuthContext.actions
export {AuthContext}

export const DataAuthContext = (state: any) => {
  return state.AuthContext as AuthContextData
}