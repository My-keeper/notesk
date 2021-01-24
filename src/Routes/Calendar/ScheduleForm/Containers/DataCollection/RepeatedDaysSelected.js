import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import Inputdata from '../../../../../UI/UserInput';


const RepeatDaySelected = (props) => {
    const [NumberOfRepeatedDays,ChangeNumberOfRepeatedDays] = useState({})
    const [isMonday,ChangeisMonday]= useState(0)
    const [isTuesday,ChangeisTuesday]= useState(1)
    const [isWednesday,ChangeisWednesday]= useState(2)
    // const [isThursday,ChangeisThursday]= useState(false)
    // const [isFriday,ChangeisFriday]= useState(false)
    // const [isSaturday,ChangeisSaturday]= useState(false)
    // const [isSunday,ChangeisSunday]= useState(false)
    const ChoosenDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    const handleRepeatedDays = (e) =>{
        
        const onchangeValue = e.target.value
        
            // if (onchangeValue == "Monday") 
            // {    
            //     const newNumberOfRP= [...NumberOfRepeatedDays]
            //     false
            //  }
            // else if (onchangeValue == "Tuesday")  
            //    { 
            //        false
            //    }
            // else if (onchangeValue == "Wednesday")
            // {  
            //     false
            // }  
            // else if (onchangeValue == "Thursday")
            // { 
            //     false
            // }    
            // else if (onchangeValue == "Friday" )
            // (
            //     false
            // )   
            // else if (onchangeValue == "Saturday")  
            // (
            //     false
            // )
            // else {
                    
            //     false
            // }
             

        // return ( 
        //     onchangeValue == "Monday" ? (
        //         isMonday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisMonday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisMonday(false)) 
        //         ) :
        //     onchangeValue == "Tuesday" ? (
        //         isTuesday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisTuesday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisTuesday(false)) 
        //         ) :
        //     onchangeValue == "Wednesday" ? (
        //         isWednesday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisWednesday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisWednesday(false))
        //         ) :
        //     onchangeValue == "Thursday" ? (
        //         isThursday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisThursday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisThursday(false))
        //         ) :
        //     onchangeValue == "Friday" ? (
        //         isFriday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisFriday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisFriday(false))  
        //         ) :
        //     onchangeValue == "Saturday" ? (
        //         isSaturday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisSaturday(true) ) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisSaturday(false) )  
        //         ):
        //     ( 
        //         isSunday == false ? 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount + 1), ChangeisSunday(true)) : 
        //                 (ChangeNumberOfRepeatedDays(prevCount => prevCount - 1), ChangeisSunday(false))
        //     )
        // )
    }

    const RepeatedDayContainer = (DayValue,OnChangeInputValue) => {
        return [<Inputdata 
            key={NumberOfRepeatedDays.id}
            inputType={"checkbox"}
            name="title"
            widthValue={"15px"}
            paddingVale={"2px"}
            outlineValue={"none"}
            fontSizeValue={"1.2em"}
            fontFamilyValue={"inherit"}
            IsCalledValue={"FOCUS"} 
            borderRadiusValue= {"7px"}
            backGroundColorValue={ props.RecievedColor.UserInputBGC}
            FontColorValue={props.RecievedColor.UserInputFC}
            PlaceHolderColorValue={props.RecievedColor.UserInputPHC}
            borderColorValue={props.RecievedColor.BorderColor} 
            BorderValue={"solid"}
            borderWidthValue={"thin"}
            marginRightValue={"5px"}
            marginTopValue={"4px"}
            onchangeValue = {OnChangeInputValue}
            InputValue = {DayValue}
            ></Inputdata>,
            <label key={NumberOfRepeatedDays.id} style={{marginRight: "10px"}}>{DayValue}</label>]
        }
        
    const LineOne = [RepeatedDayContainer(ChoosenDay[0],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[1],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[2],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[3],handleRepeatedDays)]
    const LineTwo = [RepeatedDayContainer(ChoosenDay[4],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[5],handleRepeatedDays),
                     RepeatedDayContainer(ChoosenDay[6],handleRepeatedDays)]
    
    props.ValueOfRepeatedDays(NumberOfRepeatedDays)
    return (  
    <FadeIn>
        <div style={{display: "flex",width: "50px", flexDirection: "row"}}>
             {LineOne} 
        </div>
        <div style={{
            display: "flex",
            width: "50px", 
            flexDirection: "row", 
            marginTop: "5px", 
            marginLeft: "90px", 
            marginBottom: "8px"}}
        >
             {LineTwo} 
        </div>
    </FadeIn>
       )
}

export default RepeatDaySelected;