import React, { Component } from 'react';
import Nav from '../../UI/NavBar'
import Note from './Note/Note'
import Footer from '../../UI/Footer'
import CreateNote from './CreateNote/CreateNote'
import FadeIn from 'react-fade-in';
import API from "../../API/API";

class Notes extends Component {

    //to get the notes from the DB if any
    async componentDidMount() {
        const isLoggedIn = await API.isLoggedIn(()=>{});
        console.log(isLoggedIn)
        if (isLoggedIn) {
          await API.isLoggedIn(e => this.setState({UserName : e.data.userName}))
          const PrevNotes = [...this.state.notes];
          const DBNotes = await API.GetNote();
          const MergedNotes = DBNotes.data.concat(PrevNotes);
          return this.setState({ notes: MergedNotes});
        }
        this.setState({UserName: "Welcome Guest"})
      }
    state = {
        notes: [],
        isLogOut: false,
        ChangetitleClicked: true,
        ChangeContentClicked:true,
        UserName: "Welcome Guest",
      };
    //Close is not hovered on color style
    VisibilityStle1 = {
        marginRight: "8px",
        fontSize: "22px",
        color: this.props.Color.NavIconColor,
      };
    
    /*************************************************** Adding Notes *****************************************************************************/
    addNote = (note) => {
      const prevNote = [...this.state.notes];
      prevNote.unshift(note);
      this.setState({ notes: prevNote });
    };
    /*************************************************** Deleting Notes *****************************************************************************/
    deleteNote = (id) => {
      const Delete = [...this.state.notes];
      Delete.splice(id, 1);
      this.setState({ notes: Delete });
      if (!this.state.isLogOut) {
        API.DeleteNote(id)
      }
    };
    /*************************************************** Changing Notes *****************************************************************************/
    onChangeTitle = (id, newTitle) => {
      var OldContent = ""
      const newNoteTitle = [...this.state.notes].filter((NoteId, index) => {
          if (!this.state.isLogOut && NoteId['_id'] == id) {OldContent = NoteId.content}
          return( !this.state.isLogOut ? NoteId['_id'] == id : index === id)
        })[0];
      if (newNoteTitle) {
          newNoteTitle.title = newTitle;
          const newNotes = [...this.state.notes];
          newNotes[id] = newNoteTitle;
          this.setState({ notes: newNotes });
          if (!this.state.isLogOut) {
            API.UpdateNote(id, newTitle, OldContent)
          }
        }
    };
    onChangeContent = (id, newContent) => {
      var OldTitle = ""
      const newNoteContent = [...this.state.notes].filter((NoteId, index) => {
          if (!this.state.isLogOut && NoteId['_id'] == id) {OldTitle = NoteId.title}
          return !this.state.isLogOut ? NoteId['_id'] == id : index === id;
        })[0];
      if (newNoteContent) {
          newNoteContent.content = newContent;
          const newNotes = [...this.state.notes];
          newNotes[id] = newNoteContent;
          this.setState({ notes: newNotes });
          if (!this.state.isLogOut) {
            API.UpdateNote(id, OldTitle, newContent)
          }
        }
    };
    /*************************************************** The Note *****************************************************************************/
    NoteItems = () => { 
      return [...this.state.notes].map((eachItem, i) => { 
        const id_Value = !this.state.isLogOut ? eachItem['_id'] : i
        return (
            <Note
              isTitleValue={this.state.ChangetitleClicked}  
              isContent={this.state.ChangeContentClicked}  
              NumberOfLitters={this.state.titleRowsNumber}
              RecieveColor={this.props.Color}
              key={i}
              id={id_Value}
              title={eachItem.title}
              content={eachItem.content}
              onDelete={this.deleteNote}
              ChangeTitle={this.onChangeTitle}
              ChangeContent={this.onChangeContent}
            />
        );
      });
    };

  /*************************************************** The Note Route *****************************************************************************/
  render() {
    console.log(this.state.UserName)
    return (
      <div style={{ height: "100%" }}> 
        <div style={{zIndex: "7", position: "sticky" }}>
        <Nav
          username={this.state.UserName}
          ColorChanged={this.props.colorchanged}
          RecieveColor={this.props.Color}
          showLogOutButton={true}
          isShowLogOutButton={(value) => this.setState({ isLogOut: value })}
          ShowLogOutButtonValue={this.state.isLogOut}

        />
        </div>
        <FadeIn>
          <CreateNote
            RecieveColor={this.props.Color}
            AddedNote={this.addNote}
            TitleLitterNumber={(value) => this.setState({titleRowsNumber: value})}
          />
        </FadeIn>
            <div style={{ height: "70%", overflow: "auto", paddingLeft: "56px"}}>
                {this.NoteItems()}
            </div>
        <Footer />
      </div>
    );
  }
}

export default Notes;
