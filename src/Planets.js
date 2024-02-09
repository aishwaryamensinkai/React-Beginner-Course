export const Planets = (props) => {
  return (
    <div>
      {props.isGasPlanet ? (
        <h4>I'm {props.name}. And I'm gas Planet</h4>
      ) : (
        <p></p>
      )}
    </div>
  );
};
