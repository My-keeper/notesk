import React from "react";
import styled from "styled-components";
import NotaskLog from "../Img/Logo.1.png"

 
const PosterStyle = styled.img` 
    // position: absolute;
    // height: auto;
    // box-shadow: 0 2px 5px #000;
    width: 100%;
    height: 100%;
    // border-radius: 7px;
    // object-fit: cover; 
`;
const Imag = () => {
  return (
    <PosterStyle draggable={false} src={NotaskLog} />
  );
};

export default Imag;
