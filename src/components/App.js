import React, { Component } from 'react';
import Notes from './Notes';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Create Cool Project'
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Quiz!</h1>
        <Notes notes={this.state.notes}/>
      </div>
    );
  }
}