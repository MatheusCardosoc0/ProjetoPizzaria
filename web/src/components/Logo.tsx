import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1<{ width?: number }>`
  font-size: ${({ width }) => `${width}px`};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  img{
    width: ${({ width }) => `${width * 4}px`};
    background-image: linear-gradient(to top , #ffa704, #e1e102);
    border-radius: 100%;
  }
`

interface CarLogoProps {
  width?: number
}

export const CardLogo = ({ width = 32 }: CarLogoProps) => {
  return (
    <Link href={'/dashboard'}>
      <Logo width={width}>
        <img src="/Matheus_Cardoso_logo_mark_of_pizza_restaurant_flat_2d_7e5ffa8a-e6f9-41c8-9bad-343ebeb158b4-removebg-preview.png" />

        <b>
          Pepperoni Paradise
        </b>
      </Logo>
    </Link>
  )
}
