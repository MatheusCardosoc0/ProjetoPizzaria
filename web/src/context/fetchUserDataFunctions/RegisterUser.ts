import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { RegisterProps } from '../../@types/interfaces';
import { api } from '../../services/apiClient';
import { signIn } from '../AuthContext'
import Router from 'next/router';
import { toast } from 'react-toastify';
import { setCookie } from 'nookies';

export const RegisterUser = (data : RegisterProps): ThunkAction<void, RootState, unknown, Action<string>>  => async (dispatch) => {
  try {

    const {email, password, name} = data

    const response = await api.post('/registration', {
      email,
      password,
      name
    } as RegisterProps );

    setCookie(undefined,'@nextauth.token', response.data.token, {
      maxAge: 60 * 60 * 24 * 30, // expira em 1 mes
      path: '/'
    })
    
    dispatch(signIn(response.data));

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

    Router.push('/dashboard')
    
  } catch (error) {
    console.log(error)
    toast.error("Não foi possivel fazer o cadastro")
  }
};
