import React, { Component } from 'react';
import Nav from '../../UI/NavBar'
import Note from './Note/Note'
import Footer from '../../UI/Footer'
import CreateNote from './CreateNote/CreateNote'
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import LogOutcontainer from "../../UI/Modal";

class Notes extends Component {
  //Close is not hovered on color style
  VisibilityStle1 = {
    marginRight: "8px",
    fontSize: "22px",
    color: this.props.Color.NavIconColor
  };
  state = {
    notes: [],
    isLogOut: false,
  };

  addNote = (note) => {
    const prevNote = [...this.state.notes];
    prevNote.unshift(note);
    this.setState({ notes: prevNote });
  };

  deleteNote = (id) => {
    const Delete = [...this.state.notes];
    Delete.splice(id, 1);
    this.setState({ notes: Delete });
  };
  onChangeTitle = (id, newTitle) => {
    const newNoteTitle = [...this.state.notes].filter((_, index) => {
      return index === id;
    })[0];
    if (newNoteTitle) {
      newNoteTitle.title = newTitle;
      const newNotes = [...this.state.notes];
      newNotes[id] = newNoteTitle;
      this.setState({ notes: newNotes });
    }
  };
  onChangeContent = (id, newContent) => {
    const newNoteContent = [...this.state.notes].filter((_, index) => {
      return index === id;
    })[0];
    if (newNoteContent) {
      newNoteContent.content = newContent;
      const newNotes = [...this.state.notes];
      newNotes[id] = newNoteContent;
      this.setState({ notes: newNotes });
    }
  };

  NoteItems = () => {
    return [...this.state.notes].map((eachItem, i) => {
      return (
        <Note
          RecieveColor={this.props.Color}
          key={i}
          id={i}
          title={eachItem.title}
          content={eachItem.content}
          onDelete={this.deleteNote}
          ChangeTitle={this.onChangeTitle}
          ChangeContent={this.onChangeContent}
        />
      );
    });
  };
   //for Logginout 
  IsLogout = (
      <div style={{ zIndex: "7", position: "absolute",display: "flex",justifyContent: "flex-end",left: "88%", top: "5%"}}>
        <FadeIn>
          <LogOutcontainer
            position={"relative"}
            width={"140px"}
            padding={"15px"}
            boxShadowValue={"0 1px 5px rgb(138, 137, 137)"}
            borderRadiusValue={"20px"}
            resizeValue={"both"}
            LeftValue={"70%"}
            backGroundColorValue={this.props.Color.NotekBGC}
          > 
          <Link to={"/login"}>
              <LogoutOutlined style={this.VisibilityStle1} />
              <span style={{color: this.props.Color.UserInputFC,  fontSize: "1.2em"}}>Logout</span>
          </Link>
          </LogOutcontainer>
        </FadeIn>
      </div>
    );
  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.state.isLogOut ? this.IsLogout : null}
        <Nav
          username={"Mero"}
          ColorChanged={this.props.colorchanged}
          RecieveColor={this.props.Color}
          showLogOutButton={true}
          isShowLogOutButton={(value) => this.setState({ isLogOut: value })}
          ShowLogOutButtonValue={this.state.isLogOut}
        />
        <FadeIn>
          <CreateNote
            RecieveColor={this.props.Color}
            AddedNote={this.addNote}
          />{" "}
        </FadeIn>
        {this.NoteItems()}
        <Footer />
      </div>
    );
  }
}

export default Notes;
