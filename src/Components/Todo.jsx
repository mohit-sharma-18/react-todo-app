import { Component } from "react";
class Todo extends Component {
  render() {
    return (
      <div className="todoContainer">
        <div className="todoBox">
          <div>
            <h2>To Do App</h2>
          </div>
          <div>
            <button className="saveBtn" onClick={this.props.primaryClick}>
              SAVE ALL
            </button>
            <button className="removeAllBtn" onClick={this.props.secondaryClick}>
              CLEAR LIST
            </button>
          </div>
          <p className="taskCount">{this.props.taskCount} Tasks</p>
        </div>
        <div className="formContainer">
          <form action="" onSubmit={this.props.onSubmit}>
            <input
              type="text"
              className="inputBox"
              placeholder="Add your task"
              onChange={(e) => this.props.onChange(e.target.value)}
            />
            <button className="addBtn" type="submit">
              <i className="fa fa-plus "></i>
            </button>
          </form>
        </div>
        <div className="ulContainer">
          <ul>{this.props.li}</ul>
        </div>
      </div>
    );
  }
}
export default Todo;
