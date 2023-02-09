import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`

const Input = styled.input<{width?: number; padding?: number}>`
  width: ${props => props.width + 'px' || '100px'};
  padding: ${({padding}) => padding + 'px' || '4px'};
  border-radius: ${({width}) => width / 32 + 'px' };
  font-size: 1rem;
  background-color: #080606;
  border: 2px solid gray;
  padding-inline: 8px;

  ::placeholder{
    color: #575555;
  }
`

const Form = styled.form<{}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

const Button = styled.button`
  font-size: 2rem;
  padding-block: 12px;
  padding-inline: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.terceary};
  color: white;
  border: none;
  cursor: pointer;
  width: 300px;
  font-weight: bold;
`


export { Container, Input, Form, Button }
