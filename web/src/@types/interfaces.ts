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

export interface RegisterProps extends SignInProps{
  name: string
}

export type {AuthContextData, SignInProps, UserProps}