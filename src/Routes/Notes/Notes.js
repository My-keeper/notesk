import React, { Component } from 'react';
import Nav from '../../UI/NavBar'
import Note from './Note/Note'
import Footer from '../../UI/Footer'
import CreateNote from './CreateNote/CreateNote'
import FadeIn from 'react-fade-in';

class Notes extends Component {
  
  state = {
    notes: []
  }

  addNote = (note) => {
    const prevNote =[...this.state.notes]
    prevNote.unshift(note)
    this.setState({notes : prevNote})
  }
  
  deleteNote = (id) => {
    const test = [...this.state.notes] 
    test.splice(id,1)
    this.setState({notes: test})
  }
  onChangeTitle = (id, newTitle) =>{
    const newNoteTitle = [...this.state.notes].filter((_,index) => {
      return index === id
    })[0]
    if (newNoteTitle){
      newNoteTitle.title = newTitle
      const newNotes = [...this.state.notes]
      newNotes[id] = newNoteTitle
      this.setState({notes : newNotes})
    }
  }
  onChangeContent = (id, newContent) =>{
    const  newNoteContent = [...this.state.notes].filter((_,index) => {
      return index === id
    })[0]
    if (newNoteContent){
      newNoteContent.content = newContent
      const newNotes = [...this.state.notes]
      newNotes[id] = newNoteContent
      this.setState({notes : newNotes})
    }
  }

  NoteItems = () =>{
    return  [...this.state.notes].map((eachItem,i) => {
      return <Note 
        RecieveColor={this.props.Color}
        key = {i}
        id= {i}
        title={eachItem.title} 
        content={eachItem.content}
        onDelete={this.deleteNote}
        ChangeTitle={this.onChangeTitle}
        ChangeContent={this.onChangeContent}
        />
     })
  }
  render() {
    return (
      <div style={{ height: "100%" }} >
          <Nav ColorChanged={this.props.colorchanged} RecieveColor={this.props.Color}/>     
          <FadeIn><CreateNote RecieveColor={this.props.Color} AddedNote={this.addNote}/>  </FadeIn> 
          {this.NoteItems()} 
          <Footer/>
      </div>
    );
  }
}

export default Notes;
