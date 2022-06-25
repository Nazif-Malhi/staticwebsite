import React from 'react'
import styled from 'styled-components';

const CustomButton = styled.button`
    border-radius: 6px;
    padding: 12px 20px;
    background: #0096FF;
    border: none;
    margin-left: 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    :hover{
        background: #0047AB;
        transition: .5s;
    }
`;

const Button = ({value , handleClick}) => {
  return (
    <CustomButton onClick={handleClick}>
        {value}
    </CustomButton>
  )
}

export default Button