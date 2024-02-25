import "./App.css";
import { User } from "./User";
import { Planets } from "./Planets";
import { createContext, useEffect, useState } from "react";
import { Task } from "./Task";
import { Text } from "./Text";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/ErrorPage";
import { NavBar } from "./Pages/NavBar";
import { Profile } from "./Pages/Profile";
import { Form } from "./Pages/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryApp } from "./Pages/QueryApp";
import { useToggle } from "./useToggle";
import { Cat } from "./Components/Cat";
import { Person } from "./Components/Person";
// import axios from "axios";

export const AppContext = createContext();

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
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const [showValue, setShowValue] = useState(false);

  const [catFact, setCatFact] = useState("");
  // axios.get("https://catfact.ninja/fact").then((res) => {
  //   setCatFact(res.data.fact);
  // });

  useEffect(() => {
    fetchCatInformation();
  }, []);

  const fetchCatInformation = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  };

  const [inputName, setInputName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchAgeData = () => {
    fetch("https://api.agify.io/?name=" + inputName)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPredictedAge(data.age);
      });
  };

  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGeneratedExcuse(data[0].excuse);
      });
  };
  const [username, setUsername] = useState("Aishwarya");

  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  const { state: isVisible, toggle } = useToggle();

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
          {users.map((user, key) => {
            return <User name={user.name} age={user.age} />;
          })}
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
              <i>Aishwarya</i> here.
            </p>
          )}
        </div>
        Example to change text color on Click on the button
        <div className="App Extracss">
          <button onClick={changeColor}>Show/Hide</button>
          <p>
            Hey!!
            <br />
            <i style={{ color: textColor }}>Aishwarya</i> here.
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
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completedTask={completedTask}
              />
            );
          })}
        </div>
      </div>
      <br />
      Learning about the component Lifecycle (mounting, updating, unmounting)
      <div className="App">
        <button
          onClick={() => {
            setShowValue(!showValue);
          }}
        >
          Show Text
        </button>
        <br />
        {showValue && <Text />}
      </div>
      <br />
      How To Fetch Data From an API in React
      <br />
      1. Cat Information
      <div className="App">
        <button onClick={fetchCatInformation}>Fetch Cat Information</button>
        <p>{catFact}</p>
      </div>
      <br />
      2. Predict the age of person by name.
      <div className="App">
        <input onChange={(event) => setInputName(event.target.value)}></input>
        <br />
        <br /> Entered Name is :{" "}
        <i>
          <b>{inputName}</b>
        </i>
        <br />
        <br />
        <button onClick={() => fetchAgeData()}>Predict Age</button>
        <h1>{predictedAge}</h1>
      </div>
      <br />
      3. Getting a reason for 3 different situation
      <div className="App">
        <h1> Generate An Excuse </h1>
        <button onClick={() => fetchExcuse("party")}> Party</button>
        <button onClick={() => fetchExcuse("family")}> Family</button>
        <button onClick={() => fetchExcuse("office")}> Office </button>

        <p> {generatedExcuse} </p>
      </div>
      <br />
      React Router Dom
      <div className="App">
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <NavBar />
            <Routes>
              {/* <Route path="/" element={<Home username={username} />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route
                path="/profile"
                element={
                  <Profile username={username} setUsername={setUsername} />
                }
              /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
      <br />
      React Query using useQuery Hook
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            Navbar
            <br />
            <Link to="/query">Query</Link> &nbsp;
            <Routes>
              <Route path="/query" element={<QueryApp />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
      <br />
      React-Hook-Form and YUP Tutorial | How to do Forms The Right Way
      <div className="App">
        <Form />
      </div>
      <br />
      Custom Hooks Tutorial
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
      </div>
      <br />
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/catdata" element={<Cat />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
      <br />
      TypeScript | React Type Safety
      <div className="App">
        <Person
          name="Pedro"
          email="pedro@gmail.com"
          age={21}
          isMarried={true}
          friends={["jessica", "jake", "jerry", "jasmine"]}
        />
      </div>
    </>
  );
}

const Job = (props) => {
  return (
    <div>
      <i>
        I'm a {props.position} working for {props.company} and the pay scale is{" "}
        {props.salary}
      </i>
    </div>
  );
};

export default App;
