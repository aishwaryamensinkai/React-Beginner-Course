export const Task = (props) => {
  return (
    <div className="Task">
      <p style={{ backgroundColor: props.completed ? "green" : "white" }}>
        {props.taskName}{" "}
        <button onClick={() => props.completedTask(props.id)}>Completed</button>{" "}
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </p>
    </div>
  );
};
