import * as React from "react";
import { ITodo } from "../type/Todo";

type Props = {
  todo: ITodo;
};

// function Todo({ todo }: Props) {
const Todo: React.FC<Props> = ({ todo }) => {
  const { title, description } = todo;

  return (
    <div className="Card">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
};

export default Todo;
