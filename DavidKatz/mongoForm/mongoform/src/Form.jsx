import React, { Component} from 'react';


class Form extends Component {
  render() {
    return (
      <div>
        <h1>M-Lab Database</h1>
        <form>
          <input 
            placeholder="What is your email?"
          />
          <button> SUBMIT </button>
        </form>
      </div>
    )
  }
}

export default Form;