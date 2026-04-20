import { useMutation } from "@tanstack/react-query";

import {
  registerUser,
  RegisterUserRequest,
  RegisterUserResponse,
} from "@/services/auth.service";

export const useRegisterUser = () => {
  return useMutation<RegisterUserResponse, Error, RegisterUserRequest>({
    mutationFn: registerUser,
  });
};
