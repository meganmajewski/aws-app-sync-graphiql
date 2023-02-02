import { Auth } from "aws-amplify";

export const AmplifyConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "***",
    userPoolWebClientId: "***",
  },
  API: {
    endpoints: [
      {
        name: "graphiql",
        endpoint: "https://***.appsync-api.us-east-1.amazonaws.com/graphql",
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`,

            authMode: "AMAZON_COGNITO_USER_POOLS",
          };
        },
      },
    ],
  },
};
