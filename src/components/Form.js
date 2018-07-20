import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "1"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <form action="">
          <input type="text" onChange={this.handleChange} />
          <button>envoyer</button>
        </form>
      </div>
    );
  }
}

export default Form;
