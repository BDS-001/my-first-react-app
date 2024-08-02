import React, {Component} from "react";

class Test extends Component {

    // this is needed to get access to props and use state
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            inputVal: ''
        }

        //need to bind the functions to be able to use them
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //setstate is different with classes, one state holds all of the state variables
    handleInputChange(e) {
        this.setState((state) => ({
          ...state,
          inputVal: e.target.value,
        }));
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
          todos: state.todos.concat(state.inputVal),
          inputVal: "",
        }));
      }

    //need top use render method to render jsx with classes
    render() {
        return (
            <section>
            <h3>{this.props.name}</h3>
            {/* The input field to enter To-Do's */}
            <form>
              <label htmlFor="task-entry">Enter a task: </label>
              <input type="text" name="task-entry" />
              <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            {/* The list of all the To-Do's, displayed */}
            <ul></ul>
          </section>
        )
    }
}

export default Test