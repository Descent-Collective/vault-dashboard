import { useAppDispatch, useAppSelector } from "./useRedux";
import { useRouter } from "next/navigation";

/**
 *
 * @description - Groups commonly used system functions and data in a central location for
 *                easy access and update. Commonly used funtions should be included here
 *                so we don't have to import and create same funtions everywhere.
 */

const useSystemFunctions = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  // states
  const userState = useAppSelector((state) => state.user);

  return {
    dispatch,
    navigate,

    // states
    userState,
  };
};

export default useSystemFunctions;
