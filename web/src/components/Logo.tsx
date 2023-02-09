import styled from "styled-components";

const Logo = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img{
    width: 120px;
    background-image: linear-gradient(to top , #ffa704, #e1e102);
    border-radius: 100%;
  }
`

export const CardLogo = () => {
  return (
    <Logo>
      <img src="/Matheus_Cardoso_logo_mark_of_pizza_restaurant_flat_2d_7e5ffa8a-e6f9-41c8-9bad-343ebeb158b4-removebg-preview.png"  />

      <b>
        Pepperoni Paradise
      </b>
    </Logo>
  )
}
