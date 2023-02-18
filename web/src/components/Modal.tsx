import styled from "styled-components";
import { Item } from "../@types/interfaces";
import { AiFillCloseCircle } from 'react-icons/ai'
import { Dispatch, SetStateAction } from "react";

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
  width: 500px;
  background-color: #171212;
  padding: 6px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3{
    font-size: 32px;
  }
  span{
    display: flex;
    flex-direction: column;

    p{
      margin-left: 20px;
      font-size: 18px;
      line-height: 1px;
      
      :nth-child(1){
        color: #12dec3;
    }
    }

  }
  b{
    font-size: 32px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const FinishButton = styled.button`
    width: 220px;
    font-size: 28px;
    border: 3px solid #05bbbb;
    background-color: transparent;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    margin-inline: auto;
    cursor: pointer;

    :hover{
      background-color: #2bde03;
      border: none;
      color: black;
    }
`

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  margin-left: 460px;
  font-size: 40px;
  top: -10px;
  color: ${({ theme }) => theme.colors.terceary};
  cursor: pointer;
`

interface ModalProps {
  items: Item[]
  setModalView: Dispatch<SetStateAction<boolean>>
  finishOrder: (id: string) => void
}

export const Modal = ({ items, setModalView, finishOrder }: ModalProps) => {

  function totalPrice() {
    let price = 0
    items.map(value => {
      price += Number(value.Products.price)
    })

    const estruturedPrice = String(price).slice(0, -2) + '.' + String(price).slice(-2)

    return price
  }

  return (
    <ModalContainer>
      <CloseButton onClick={() => setModalView(false)}>
        <AiFillCloseCircle />
      </CloseButton>
      <div>
        <h3>
          Detalhes do Pedido
        </h3>
        <p>Mesa {items[0].Order.table}</p>
      </div>
      <div>
        {items.map((item, i) => (
          <span key={i}>
            <p>{item.amount}-{item.Products.name}</p>
            <p>{item.Products.description}</p>
          </span>
        ))}
      </div>
      <b>
        R$ {totalPrice()}
      </b>

      <FinishButton onClick={() => finishOrder(items[0].Order.id)}>
        Fechar Pedido
      </FinishButton>
    </ModalContainer>
  )
}