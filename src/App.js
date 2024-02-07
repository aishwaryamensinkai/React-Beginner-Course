import "./App.css";

function App() {
  return (
    <div className="App">
      Hello
      <br />
      <User name="Aishwarya" age={24} />
      <Job position="Web Developer" salary={1700000} company="Google" />
      <br />
      <User name="Apoorva" age={24} />
      <Job position="Software Developer" salary={1200000} company="IBM" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>I'm {props.age} years.</h3>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h3>
        I'm a {props.position} working for {props.company} and the payscale is{" "}
        {props.salary}
      </h3>
    </div>
  );
};

export default App;
