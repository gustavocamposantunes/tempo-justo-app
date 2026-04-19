import { useMutation } from "@tanstack/react-query";

import { loginUser, LoginRequest, LoginResponse } from "@/services/auth.service";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginUser,
  });
};
