import { Action, ThunkAction } from "@reduxjs/toolkit";
import { parseCookies } from "nookies";
import { RootState } from "..";
import { UserProps } from "../../@types/interfaces";
import { api } from "../../services/apiClient";
import { signIn, signOut } from "../AuthContext";

export const GetDataUserAuthenticated = (): any => async (dispatch) => {

  const {'@nextauth.token': token} = parseCookies()

  if(token){
    await api.get('/userInfo').then(response => {
      dispatch(signIn(response.data))
    }).catch(() => {
      dispatch(signOut())
    })
 
  }
}