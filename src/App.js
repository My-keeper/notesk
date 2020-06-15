import React, { Component } from 'react';
import './App.css'
import Nav from './Header/Header'
import Note from './Body/Note/Note'
import Footer from './Footer/Footer'
import CreateNote from './Body/CreateNote/CreateNote'

class App extends Component {
  
  state = {
    notes: [],
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
        key = {i}
        id= {i}
        title={eachItem.title} 
        content={eachItem.content}
        onDelete={this.deleteNote}
        />;
     })
  }

  render() {
    return (
      <div >
          <Nav/>     
          <CreateNote AddedNote={this.addNote}/>   
          {this.NoteItems()}
          <Footer/>
      </div>
    );
  }
}

export default App;
