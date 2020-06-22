import React from 'react';
import styled from "styled-components";

const Header = styled.div `
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`
const HeaderInfo = styled.h1`
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;
`

const Nav = () => (
    <Header> 
        <HeaderInfo> Mero </HeaderInfo>
    </Header>
)

export default Nav 