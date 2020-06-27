import React, { Component } from 'react';
import './App.css'
import Nav from './Header/Header'
import Note from './Body/Note/Note'
import Footer from './Footer/Footer'
import CreateNote from './Body/CreateNote/CreateNote'

class App extends Component {
  
  state = {
    notes: [],
    Color: {
      NotekG:"#2F4F4F",
      NoteF:"",

      UserInputBG:"#fff",
      UserInputF:"#000000",
      UserInputPH:"#A9A9A9",
      
      TextAreaBGC:"#fff",
      TextAreaFC:"#000000",
      TextAreaPHC :"#A9A9A9",
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
        Color={this.state.Color}
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
          <CreateNote Color={this.state.Color} AddedNote={this.addNote}/>   
          {this.NoteItems()}
          <Footer/>
      </div>
    );
  }
}

export default App;
