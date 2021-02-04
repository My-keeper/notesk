

import React, { useState } from "react";
import FadeIn  from 'react-fade-in'; 
import {LoginOutlined} from "@ant-design/icons"; 
import Button from '../../../../UI/Button';

const SubmitButton = (props) => {
    
    const [isSubmit, ChangeIsSubmit] = useState(true)
    const subNote = () => (
           ChangeIsSubmit(false)
    //    ]
       )
        // props.SendTheData(isDatat)
        props.SubmitisClicked(isSubmit)
    const ButtonIconColor = { 
        fontSize:"20px", 
        marginRight:"9px", 
        marginTop:"4px" 
    }
    const SubmitButton = <FadeIn>
        <Button
        width={"120px"}
        marginBottomValue={"10px"}
        marginLeftValue={"35%"}
        fontSizeValue={"20px"}
        borderRadiusValue={"15px"} 
        IsCalledValue={"hover"} 
        BorderValue="solid"
        borderWidthValue="thin"
        paddingInputValue="2px" 
        onClick={subNote} 
        text = {"Submit"} 
        icon = {<LoginOutlined style={ButtonIconColor}/>}
        />
    </FadeIn>
    
    return (SubmitButton)
}

export default SubmitButton;
