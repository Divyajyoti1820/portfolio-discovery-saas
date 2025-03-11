import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await client.api.authentication.profile["$get"]();
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
