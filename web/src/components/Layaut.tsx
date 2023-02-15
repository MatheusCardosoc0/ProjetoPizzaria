import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { CardLogo } from "./Logo";
import { FiLogOut } from 'react-icons/fi'

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;

  div{
    display: flex;
    gap: 20px;
    font-size: 20px;
    align-items: center;

    a{
      cursor: pointer;
      :hover{
        text-decoration: underline;
        color: ${({theme}) => theme.colors.terceary};
      }
    }

    button{
      background-color: transparent;
      border: none;
      color: white;
      font-size: 32px;
      cursor: pointer;
      :hover{
        color: ${({theme}) => theme.colors.secondary}
      }
    }
  }
`

const LayautContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 82px;

`


export const Layaut = ({ children }: { children: ReactNode }) => {
  return (
    <LayautContainer>
      <NavbarContainer>
        <CardLogo width={22} />

        <div>
          <Link href={'/category'}>Categoria</Link>
          <Link href={'/product'}>Cardapio</Link>
          <button>
            <FiLogOut />
          </button>
        </div>
      </NavbarContainer>

      <div>
        {children}
      </div>
    </LayautContainer>
  )
}