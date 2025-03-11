import { client } from "@/lib/hono";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type RequestType = InferRequestType<
  (typeof client.api.authentication.profile.update)["$patch"]
>;
type ResponseType = InferResponseType<
  (typeof client.api.authentication.profile.update)["$patch"],
  200
>;

export const useUpdateProfile = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.authentication.profile.update["$patch"](
        { json }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      return data;
    },
  });

  return mutation;
};
