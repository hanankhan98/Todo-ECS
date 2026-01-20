import React from "react";
import Card from "./Card";

const Completed = ({ todos, setTodos }) => {
  let x = todos.filter((e) => e.status === true);
  return (
    <>
      {x.map((e, i) => {
        return <Card data={todos} todos={e} setTodos={setTodos} key={i} />;
      })}
    </>
  );
};

export default Completed;
