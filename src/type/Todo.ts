// The  ITodo type describes the shape of a Todo.
export interface ITodo {
  id?: string;
  title: string;
  description: string;
}

// ITodos which returns an array of Todos from the API. 
export interface ITodos {
  getTodos: [ITodo];
}

// We rely on ITodo to define the type expected by the GraphQL mutation query ITodoMutation
export type ITodoMutation = {
  addTodo: ITodo;
};
