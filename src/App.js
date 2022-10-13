import "./App.css";
import { Component } from "react";
import Container from "./Components/Container";
import Todo from "./Components/Todo";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputBoxVal: "",
      liElements: [],
      taskCount: 0,
    };
  }
  onChange = (e) => {
    this.setState({
      inputBoxVal: e,
    });
  };
  addBtnHandler = (e) => {
    e.preventDefault();
    if (document.getElementsByClassName("inputBox")[0].value == "") {
      return false;
    }
    this.setState((state) => ({
      liElements: [...state.liElements, this.state.inputBoxVal],
    }));
    document.getElementsByClassName("inputBox")[0].value = "";
    this.setState({
      taskCount: this.state.liElements.length + 1,
    });
  };

  removeHandler = (e) => {
    var x = e.target.parentElement.innerText;
    this.setState({
      liElements: this.state.liElements.filter((e) => {
        return e !== x;
      }),
    });
    this.setState({
      taskCount: this.state.liElements.filter((e) => {
        return e !== x;
      }).length,
    });
  };
  saveHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("items", JSON.stringify(this.state.liElements));
    if (e.target.className == "removeAllBtn") {
      localStorage.removeItem("items");
      localStorage.setItem("items", JSON.stringify([]));
      document.querySelector("ul").innerHTML = "";
      this.setState({
        taskCount: 0,
      });
    }
  };

  setItems = () => {
    var getLocalData = localStorage.getItem("items");
    var LocalDataArr = JSON.parse(getLocalData);
    this.setState(() => ({
      liElements: [...LocalDataArr],
    }));
    this.setState({
      taskCount: LocalDataArr.length,
    });
  };
  componentDidMount() {
    this.setItems();
  }

  render() {
    return (
      <Container>
        <Todo
          onSubmit={this.addBtnHandler}
          onChange={this.onChange}
          li={this.state.liElements.map((e, i) => (
            <li key={i} className={`todoList${i}`}>
              {e}{" "}
              <i
                className="fa fa-minus removeBtn"
                onClick={this.removeHandler}
              ></i>
            </li>
          ))}
          onClick={this.saveHandler}
          primaryClick={this.saveHandler}
          secondaryClick={this.saveHandler}
          taskCount={this.state.taskCount}
        ></Todo>
      </Container>
    );
  }
}

export default App;
