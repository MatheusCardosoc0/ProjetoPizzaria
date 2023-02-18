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

type Order = {
  name: string | null
  table: number | string
  id: string
  draft: boolean
  status: boolean
}

type Product = {
  name: string
  price: number | string
  description: string
}

export interface Item{
  Order: Order
  Products: Product
  amount: number
}

export type {AuthContextData, SignInProps, UserProps, Order, Product}