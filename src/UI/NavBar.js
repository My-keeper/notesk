import React from "react";
import styled from "styled-components";
import SwitchIcon from './Switch'


const StyledNavBar = styled.div`
    // z-index: 2;
    // display: flex;
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    align-items: center;
    // box-sizing: border-box;
    // padding: 5px 20px;
    justify-content: space-between;
    height: 50px;
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const NavBar = (props) => (
        <StyledNavBar>
            Hi
            <SwitchIcon OnChangedColor={props.ColorChanged}/>
        </StyledNavBar>

)



export default NavBar;