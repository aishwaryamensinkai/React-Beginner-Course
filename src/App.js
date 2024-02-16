import "./App.css";
import { User } from "./User";
import { Planets } from "./Planets";
import { useState } from "react";

function App() {
  const cname = 2;
  const isGreen = true;
  const users = [
    { name: "Aishwarya", age: 24 },
    { name: "Apoorva", age: 21 },
    { name: "Anusha", age: 17 },
  ];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  const [number, setNumber] = useState(0);

  const addInc = () => {
    setNumber(number + 1);
  };
  const [inputValue, setInputValue] = useState("");

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };
  const [showText, setShowText] = useState(true);

  const showHideFun = () => {
    setShowText(!showText);
  };
  const [textColor, setTextColor] = useState("red");

  const changeColor = () => {
    setTextColor(textColor === "black" ? "red" : "Black");
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setCountTo0 = () => {
    setCount(0);
  };

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    let a;
  };

  //return function
  return (
    <>
      <div>
        Div class to display the HTML contents.In className another CSS class is
        included.
        <div className="App Extracss">
          Hello
          <br />
          {/* User and Job are the components in react */}
          <User name="Aishwarya" age={24} />
          <Job position="Web Developer" salary={1700000} company="Google" />
          <br />
          <User name="Apoorva" age={24} />
          <Job position="Software Developer" salary={1200000} company="IBM" />
        </div>
        <br />
        The below code is example of If statement can be included.
        <div className="App">
          {cname >= 2 ? <h2>CLASS A</h2> : <h2>CLASS B</h2>}
          <h1 style={{ color: isGreen ? "green" : "red" }}>
            Testing the isGreen.
          </h1>
          {isGreen && <button>Yes</button>}
        </div>
        The below code is example for operations on list of users/working with
        object using map function and returning the User component.
        <div className="App Extracss">
          <p>
            {users.map((user, key) => {
              return <User name={user.name} age={user.age} />;
            })}
          </p>
        </div>
        Example code to create a new component to just display non gas planets.
        <div className="Extracss">
          <p>
            {planets.map((planet, key) => {
              return (
                <Planets name={planet.name} isGasPlanet={planet.isGasPlanet} />
              );
            })}
          </p>
        </div>
        UseState Hook Concept implementation taking an example of incrementing
        number by 1.
        <br />
        <div className="App Extracss">
          Number is :{number}
          <br />
          <button onClick={addInc}>Increment</button>
        </div>
        <br />
        Another example for Hook concept to display text that is being typed in
        input field.
        <br />
        <br />
        <div className="App Extracss">
          <input type="text" onChange={changeValue} />
          <br />
          <h1>{inputValue}</h1>
        </div>
        <br />
        Example to Hide/Show text on Click on the button
        <div className="App Extracss">
          <button onClick={showHideFun}>Show/Hide</button>
          {showText && (
            <p>
              Hey!!
              <br />
              <p>Aishwarya</p> here.
            </p>
          )}
        </div>
        Example to change text color on Click on the button
        <div className="App Extracss">
          <button onClick={changeColor}>Show/Hide</button>
          <p>
            Hey!!
            <br />
            <p style={{ color: textColor }}>Aishwarya</p> here.
          </p>
        </div>
        <br />
        Example to Increase, Decrease /set the count to 0 on Click on the
        buttons
        <div className="App Extracss">
          <button onClick={increaseCount}>Increase</button>{" "}
          <button onClick={decreaseCount}>Decrease</button>{" "}
          <button onClick={setCountTo0}>Count to 0</button>
          <p>Value of Count is : {count}</p>
        </div>
      </div>
      Learning about the CRUD operations
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">{newTask}</div>
      </div>
    </>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3>
        I'm a {props.position} working for {props.company} and the pay scale is{" "}
        {props.salary}
      </h3>
    </div>
  );
};

export default App;
