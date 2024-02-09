export const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>I'm {props.age} years.</h3>
    </div>
  );
};
