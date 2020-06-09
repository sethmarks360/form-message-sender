import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class formSend extends React.Component{

constructor(props) {
  super(props);
  this.state = {message: '', name: '', email: ''};
}


submitToAPI = () => {
  fetch("https://b3a4w3o5al.execute-api.us-west-1.amazonaws.com/main_stage/sendEmail", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: this.state.message, name: this.state.name})
  }).then(response => response.json()).then(response => console.log(response));
  document.getElementById("confirmation-message").style.display = "block";
}

onMessageEntry = (event) => {
  this.setState({message: event.target.value});
}

onNameEntry = (event) => {
  this.setState({name: event.target.value});
}

render() {
  return (
    <div>
      <h1>Form Message Sender</h1>
      <div className="form-container">
        <form className="form">
          <TextField required onChange={this.onNameEntry} id="outlines" label="Full Name"></TextField><br/>
          <TextField required id="outlined" label="Email Address"></TextField><br/>
          <TextField required type="outlined submit" id="message" label="Message" onChange={this.onMessageEntry}></TextField><br/>
          <Button disabled={!this.state.message.length > 0 || !this.state.name.length > 0 && !this.state.email.length > 0} type="submit" onClick={this.submitToAPI} >Submit</Button>
        </form>
      </div>
      <h2 id="confirmation-message">Your message has been sent!</h2>
    </div>
  );
}
}

export default formSend;
