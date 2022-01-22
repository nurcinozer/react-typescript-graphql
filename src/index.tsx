import * as React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

// Apollo client can now be used to retrieve data from the API.
const client = new ApolloClient({
  uri: "https://tyoku.sse.codesandbox.io/graphql",
});

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>,
  rootElement
);
