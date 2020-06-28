import React, { Component } from 'react';
import './App.css'
import Nav from './UI/NavBar'
import Note from './Body/Note/Note'
import Footer from './Footer/Footer'
import CreateNote from './Body/CreateNote/CreateNote'

class App extends Component {
  
  state = {
    notes: [],
    Color: {
      // ModelArea
      NotekGCC : "#fff",
      NoteFC : "",
      //userInput
      UserInputBGC : "#fff",
      UserInputFC : "#000000",
      UserInputPHC : "",
      //TextArea
      TextAreaBGC : "#fff",
      TextAreaFC : "#000000",
      TextAreaPHC : "",
    },
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

  NoteItems = () =>{
    return  [...this.state.notes].map((eachItem,i) => {
      return <Note 
        RecieveColor={this.state.Color}
        key = {i}
        id= {i}
        title={eachItem.title} 
        content={eachItem.content}
        onDelete={this.deleteNote}
        />;
     })
  }
  colorchanged = (NewColor) => {
    this.setState({
      Color: NewColor
    })
  }
  render() {
    return (
      <div >
          <Nav ColorChanged={this.colorchanged}/>     
          <CreateNote RecieveColor={this.state.Color} AddedNote={this.addNote}/>   
          {this.NoteItems()}
          <Footer/>
      </div>
    );
  }
}

export default App;
