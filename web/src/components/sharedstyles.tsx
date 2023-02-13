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

const Input = styled.input<{width?: number, padding?:number}>`
  width: ${({width = 300}) => `${width}px`};
  padding: ${({padding = 16}) => `${padding}px`};
  border-radius: ${({width = 300}) => `${width / 32}px`};
  font-size: 1rem;
  background-color: #080606;
  border: 2px solid gray;
  padding-inline: 8px;
  color: white;

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

const Button = styled.button<{width?: number; fontSizeInRem?: number; color?: string}>`
  font-size: ${({fontSizeInRem = 2}) => `${fontSizeInRem}rem`};
  padding-block: 12px;
  padding-inline: 24px;
  border-radius: 8px;
  background-color: ${({color, theme}) => color || theme.colors.terceary};
  color: white;
  border: none;
  cursor: pointer;
  width: ${({width = 300}) => `${width}px` };
  font-weight: bold;
`


export { Container, Input, Form, Button }
