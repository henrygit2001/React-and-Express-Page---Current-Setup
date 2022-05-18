import './App.css';
import React from 'react'
 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
 
  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handlingSubmit = (event) => {
    alert('A form was submitted: ' + this.state.name);
 
    fetch('http://localhost:3000', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        data: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}

handlingReturn = (event) => {
  fetch('http://localhost:3000').then(response => response.json())
      .then(data => this.setState({ totalReactPackages: data.total }));
}
  render() {
    return (
      <form onSubmit={this.handlingSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handlingChange} />
        </label>
        <input type="submit" value="Submit" />
        <text>
        </text>
      </form>
    );
  }
}
 
export default MyForm;
