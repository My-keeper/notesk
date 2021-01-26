import React, { useState } from "react";
import FadeIn  from 'react-fade-in';
import Inputdata from '../../../../../UI/UserInput';


const RepeatDaySelected = (props) => {
    const [NumberOfRepeatedDays,ChangeNumberOfRepeatedDays] = useState([])
    const [isMonday,ChangeisMonday]= useState(false)
    const [isTuesday,ChangeisTuesday]= useState(false)
    const [isWednesday,ChangeisWednesday]= useState(false)
    const [isThursday,ChangeisThursday]= useState(false)
    const [isFriday,ChangeisFriday]= useState(false)
    const [isSaturday,ChangeisSaturday]= useState(false)
    const [isSunday,ChangeisSunday]= useState(false)
    const ChoosenDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    const handleRepeatedDays = (e) =>{
        
        const onchangeValue = e.target.value
        console.log(NumberOfRepeatedDays)
        console.log(isMonday)
        return ( 
            onchangeValue == "Monday" ? (
                isMonday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('0')), ChangeisMonday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisMonday(false)) 
                        : 
                        ( onchangeValue != "Monday" ? 
                            ChangeisMonday(false) 
                            : 
                            (ChangeisMonday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "0")))
                        ) 
                    ) 
            ) :
            onchangeValue == "Tuesday" ? (
                isTuesday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('1')), ChangeisTuesday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisTuesday(false)) 
                        : 
                        ( onchangeValue != "Tuesday" ? 
                            ChangeisTuesday(false) 
                            : 
                            (ChangeisTuesday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "1")))
                        ) 
                    )
                ) :
            onchangeValue == "Wednesday" ? (
                isWednesday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('2')), ChangeisWednesday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisWednesday(false)) 
                        : 
                        ( onchangeValue != "Wednesday" ? 
                            ChangeisWednesday(false) 
                            : 
                            (ChangeisWednesday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "2")))
                        ) 
                    )
                ) :
            onchangeValue == "Thursday" ? (
                isThursday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('3')), ChangeisThursday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisThursday(false)) 
                        : 
                        ( onchangeValue != "Thursday" ? 
                            ChangeisThursday(false) 
                            : 
                            (ChangeisThursday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "3")))
                        ) 
                    )
                ) :
            onchangeValue == "Friday" ? (
                isFriday == false ? 
                     (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('4')), ChangeisFriday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisFriday(false)) 
                        : 
                        ( onchangeValue != "Friday" ? 
                            ChangeisFriday(false) 
                            : 
                            (ChangeisFriday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "4")))
                        ) 
                    ) 
                ) :
            onchangeValue == "Saturday" ? (
                isSaturday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('5')), ChangeisSaturday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisSaturday(false)) 
                        : 
                        ( onchangeValue != "Saturday" ? 
                            ChangeisSaturday(false) 
                            : 
                            (ChangeisSaturday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "5")))
                        ) 
                    )  
                ):
            ( 
                isSunday == false ? 
                    (ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.concat('6')), ChangeisSunday(true)) 
                    :
                    (NumberOfRepeatedDays.length == 0 ? 
                        (ChangeisSunday(false)) 
                        : 
                        (onchangeValue != "Sunday" ? 
                            ChangeisSunday(false) 
                            : 
                            (ChangeisSunday(false), ChangeNumberOfRepeatedDays(NumberOfRepeatedDays.filter(Value => Value !== "6")))
                        )
                    )
            )
        )
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