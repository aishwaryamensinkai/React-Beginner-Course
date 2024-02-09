import "./App.css";
import { User } from "./User";
import { Planets } from "./Planets";

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

  //return function
  return (
    <>
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
