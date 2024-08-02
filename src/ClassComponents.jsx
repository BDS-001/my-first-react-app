import {Component} from "react";

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
        this.handleDeleteTask = this.handleDeleteTask.bind(this)
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

      handleDeleteTask(e, key) {
        console.log(key)
        console.log(e.target)
        this.setState((state) => ({
          ...state,
          todos: this.state.todos.filter((todo) => todo != key),
        }));
      }

    //need top use render method to render jsx with classes
    render() {
        return (
          <section>
          <h3>{this.props.name}</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="task-entry">Enter a task: </label>
            <input
              type="text"
              name="task-entry"
              value={this.state.inputVal}
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <h4>All the tasks!</h4>
          <ul>
            {this.state.todos.map((todo) => (
              <li key={todo}>{todo} <button onClick={(e) => this.handleDeleteTask(e, todo)} >Delete</button> </li>
            ))}
          </ul>
        </section>
        )
    }
}

export default Test