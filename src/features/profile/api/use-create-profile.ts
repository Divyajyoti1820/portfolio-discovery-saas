import { client } from "@/lib/hono";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type RequestType = InferRequestType<
  (typeof client.api.profile.create)["$post"]
>;
type ResponseType = InferResponseType<
  (typeof client.api.profile.create)["$post"],
  200
>;

export const useCreateProfile = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.profile.create["$post"]({ json });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return data;
    },
  });

  return mutation;
};
