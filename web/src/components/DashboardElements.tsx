import styled from "styled-components";
import { BiRefresh } from 'react-icons/bi'
import { Order } from "../@types/interfaces";

const Title = styled.div`
  display: flex;
  font-size: 20px;
  text-align: start;
  width: 400px;
  align-items: center;

  button{
    background-color: transparent;
    border: none;
    font-size: 60px;
    color: #21b3b3;
    cursor: pointer;
    transition: 1s;

    :hover{
      transform: rotate(180deg);
    }
    :active{
      transition: 0s;
      transform: rotate(360deg);
    }
  }
`

const CardOrder = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  gap: 12px;

  button{
    width: 400px;
    text-align: start;
    background-color: black;
    border: none;
    border-radius: 4px;
    display: flex;
    height: 62px;
    align-items: center;
    cursor: pointer;
    :hover{
      filter: brightness(10);
    }

    div{
      position: relative;
      background-color: #036565;
      width: 6%;
      height: 100%;
      margin-left: -6px;
      margin-right: 20px;
      border-top-left-radius: 4px;
      border-bottom-left-radius:4px ;
    }

    span{
      color: white;
      font-size: 32px;
      font-weight: 700;
    }
  }
`

interface DashboardProps {
  orders: Order[]
  openModal: (id: string) => void
  Refresh: () => void
}

export function Dashboard({ orders, openModal, Refresh }: DashboardProps) {

  return (
    <>
      <Title>
        <h2>Últimos pedidos</h2>
        <button onClick={() => Refresh()}>
          <BiRefresh />
        </button>
      </Title>

      {(orders.length == 0) && <h3>Não há nenhum pedido</h3>}

      <CardOrder>
        {orders.map(order => (
          <button onClick={() => openModal(order.id)}>
            <div />
            <span>Mesa {order.table}</span>
          </button>
        ))}
      </CardOrder>
    </>
  )
}