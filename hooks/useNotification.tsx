import { setError } from "@/application/alert/error";
import { setSuccess } from "@/application/alert/success";
import { setInfo } from "@/application/alert/info";
import useSystemFunctions from "./useSystemFunctions";

const useNotification = () => {
  const { dispatch } = useSystemFunctions();

  const handleError = (error: any) => {
    dispatch(setSuccess(""));
    dispatch(setInfo(""));
    if (typeof error === "string") {
      dispatch(setError(error));
    } else {
      const msg = error?.response?.data?.message;
      dispatch(setError(msg || "Something went wrong"));
    }

    setTimeout(() => {
      dispatch(setError(""));
    }, 5000);
  };

  const handleSuccess = (value: string) => {
    dispatch(setError(""));
    dispatch(setInfo(""));
    dispatch(setSuccess(value));
    setTimeout(() => {
      dispatch(setSuccess(""));
    }, 4000);
  };

  const handleInfo = (value: string) => {
    dispatch(setError(""));
    dispatch(setSuccess(""));
    dispatch(setInfo(value));
    setTimeout(() => {
      dispatch(setInfo(""));
    }, 3000);
  };

  return { handleError, handleSuccess, handleInfo };
};

export default useNotification;
