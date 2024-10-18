import { type ResultOf, type VariablesOf, graphql } from "gql.tada";

export const example = graphql(`
   query example {
        continents{
            name
        }
   } 
`);

export type exampleQueryResponse = ResultOf<typeof example>;
export type exampleQueryVariables = VariablesOf<typeof example>;
