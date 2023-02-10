import { Action, AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';
import { SignInProps } from '../@types/interfaces';
import { api } from '../services/apiClient';
import { signIn } from './AuthContext'
import Router from 'next/router';

export const LoginUser = (data : SignInProps): ThunkAction<void, RootState, unknown, Action<string>>  => async (dispatch) => {
  try {

    const {email, password} = data

    const response = await api.post('/session', {
      email,
      password
    } as SignInProps );
    dispatch(signIn(response.data));

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

    Router.push('/dashboard')
  } catch (error) {
    console.log(error)
  }
};
