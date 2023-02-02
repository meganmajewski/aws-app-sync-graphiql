import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.min.css";
import { AmplifyConfig } from "./Config";
Amplify.configure(AmplifyConfig);

function App() {
  return (
    <Authenticator
      signUpAttributes={["email", "phone_number", "name"]}
      loginMechanisms={["phone_number"]}
    >
      <GraphiQL fetcher={fetcher} />
    </Authenticator>
  );
}
const fetcher = (graphqlParams: any) => {
  return API.post("graphiql", "", {
    body: graphqlParams,
  })
    .then((response) => response)
    .catch((error) => error);
};
export default App;
