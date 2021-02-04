import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { LoginOutlined } from "@ant-design/icons";
import Button from "../../../../UI/Button";
import { createEventId } from "../../event-utils";

const SubmitButton = (props) => {
  const [EventTest, ChangeEventTest] = useState([
    {
      id: "a",
      title: "Testoing for more ",
      start: "2021-02-13T12:30:00Z",
      textColor: "pink",
      end: "2021-02-14T13:30:00Z",
      description: "lets play some game s",
      display: "list-item",
      backgroundColor: "black",
    },
    {
      start: "2021-02-13",
      textColor: "pink",
      end: "2021-02-14",
      daysOfWeek: ["1"], //https://fullcalendar.io/docs/recurring-events
      // daysOfWeek: [ '1','4','5' ], //https://fullcalendar.io/docs/recurring-events
      startTime: "10:45:00",
      endTime: "12:45:00",
      display: "list-item",
      textColor: "black",
    },
  ]);
  
  const [CreateEvent, ChanageEventInfo] = useState({
    id: createEventId(),
    title: "mero",
    start: "2021-02-18",
    description: "well it work",
    display: "list-item",
    textColor: "red",
  });
  const [isSubmit, ChangeIsSubmit] = useState(true);
  const subNote = () => (
    ChangeIsSubmit(false),
    ChangeEventTest([...EventTest, CreateEvent])
  );


  
  const ButtonIconColor = {
    fontSize: "20px",
    marginRight: "9px",
    marginTop: "4px",
  };
  const SubmitButton = (
    <FadeIn>
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
        text={"Submit"}
        icon={<LoginOutlined style={ButtonIconColor} />}
      />
    </FadeIn>
  );

  props.GetEvent(EventTest);
  props.IsSubmistClicked(isSubmit);

  return SubmitButton;
};

export default SubmitButton;
