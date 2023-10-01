"use client";
import { CallbackProps } from "@/store";
import useSystemFunctions from "@/hooks/useSystemFunctions";

import { setUser, setLoading } from ".";
import api from "./api";
import useNotification from "@/hooks/useNotification";

const useUserActions = () => {
  const { dispatch } = useSystemFunctions();
  const { handleError, handleSuccess } = useNotification();

  const signupUser = async (data: {}, callback?: CallbackProps) => {
    try {
      dispatch(setLoading(true));
      const response = await api.signup(data);

      dispatch(setUser({ name: "jon doe" }));
      handleSuccess("Login successful");
      callback?.onSuccess?.(response);
    } catch (error: any) {
      const msg = handleError(error);
      callback?.onError?.(msg);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    signupUser,
  };
};

export default useUserActions;
