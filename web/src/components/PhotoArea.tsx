import styled from "styled-components";
import { FiUpload } from 'react-icons/fi'
import { ChangeEvent } from "react";

const PhotoContainer = styled.label`
  width: 500px;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  input{
    display: none;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span{
    font-size: 48px;
    z-index: 99;
    transition: all 0.8s;
    opacity: 0.7;
    position: absolute;

    :hover{
      scale: 1.4;
      opacity: 1;
    }
  }
`
interface PhotoArea {
  avatarUrl: string
  handleFiles: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PhotoArea = ({ avatarUrl, handleFiles }: PhotoArea) => {
  return (
    <PhotoContainer>
      <span>
        <FiUpload />
      </span>
      <input type={"file"} accept="image/png, image/jpeg" onChange={handleFiles} />

      {avatarUrl && (
        <img src={avatarUrl} alt="foto do produto"
          width={250}
          height={250} />
      )}
    </PhotoContainer>
  )
}