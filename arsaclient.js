import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(
  
    process.env.NEXT_PUBLIC_GRAPHCMS_ARSA_URL,
      {
        headers:{

        },
    }
);