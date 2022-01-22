// useRequest.ts is a custom hook that helps fetch data using Apollo Client.

import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { ITodos, ITodoMutation } from "./type/Todo";

// that expects a GraphQL Query to fetch all Todos from the API and then returns the data
export function useTodoQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<ITodos>(gqlQuery);
  return { loading, error, data };
}

// create a new Todo based on the data received as a parameter.
export function useTodoMutation(gqlQuery: DocumentNode) {
  const [addTodo] = useMutation<ITodoMutation>(gqlQuery);
  return [addTodo];
}
