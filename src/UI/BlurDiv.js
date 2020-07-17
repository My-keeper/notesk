import React from "react";
import styled from "styled-components";
{/* <BlurDiv style={{ height: "100%" }} blurDegree={"3px"}>
<StyledImage src={backgroundImage} alt="oops" />
</BlurDiv> */}


const StyledBlurDiv = styled.div`
  filter: blur(${(props) => props.blurDegree});
`;

const BlurDiv = (props) => {
  return (
    <StyledBlurDiv style={props.style} blurDegree={props.blurDegree}>
      {props.children}
    </StyledBlurDiv>
  );
};

export default BlurDiv;