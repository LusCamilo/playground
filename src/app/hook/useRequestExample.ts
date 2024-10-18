import { example, type exampleQueryResponse } from "@/app/graphql/requestExample";
import { useQuery } from "@tanstack/react-query";
import client from "@/graphqlClient";

export function useQueryExample() {
  return useQuery<exampleQueryResponse>({
    queryKey: ["fetch-drivers-counts"],
    queryFn: async () => {
      const result = await client.query({ query: example, variables: {} });
      return result.data;
    }
  });
}
