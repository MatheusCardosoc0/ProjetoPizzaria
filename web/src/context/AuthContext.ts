import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";
import { AuthContextData, SignInProps, UserProps } from "../@types/interfaces";
import Router from "next/router";

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
    signIn(state, {payload}: PayloadAction<any>){
      console.log(payload.token)

      const {email, id, name}: UserProps = payload

      state.user = {
        email,
        id,
        name
      }
    },
    signOut(){
      try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
      } catch (error) {
        console.log('erro ao deslogar')
      }
    }
  }
})

export const { signIn, signOut } = AuthContext.actions
export {AuthContext}

export const DataAuthContext = (state: any) => {
  return state.AuthContext as AuthContextData
}