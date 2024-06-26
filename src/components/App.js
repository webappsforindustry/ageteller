import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21',
      showStats: false,
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className="App h-screen bg-slate-300">
        <Form inline>
          <h2 className='text-2xl font-bold'>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
            className='w-1/3 mx-auto bg-slate-200 mt-4'
          ></FormControl>
          <Button className='mt-4' onClick={() => this.changeBirthday()}>Submit</Button>
          {this.state.showStats ? <div className='fade age-stats'><AgeStats date={this.state.birthday}/></div>  : <div></div>}
        </Form>
      </div>
    );
  }
}

export default App;
