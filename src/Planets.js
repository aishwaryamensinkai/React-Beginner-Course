export const Planets = (props) => {
  return (
    <b>
      {props.isGasPlanet ? (
        <i>
          I'm {props.name}. And I'm gas Planet
          <br />
        </i>
      ) : (
        <i></i>
      )}
    </b>
  );
};
