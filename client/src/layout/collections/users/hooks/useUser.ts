import { useCallback, useState, useMemo } from "react";
import { normalizedEditUser } from "../helpers/normalization/normalizeUser";
import RegistrationForm, {
  UserMapToModelEditType,
} from "../models/types/userType";
import { editUser } from "../service/userApi";
import { getUser, getUsers } from "../service/userApi";
import {
  UserMapToModelType,
  NormalizedEditUser,
} from "../../users/models/types/userType";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../../../extras/providers/SnackbarProvider";
import UserInterface from "../models/interfaces/UserInterface";

export type userType = null | UserInterface | undefined;
// | NormalizedEditUser; //idk about this
type ErrorType = null | string;
// type usersType = userType[] | null;

const useUser = () => {
  const [isLoadingUser, setLoadingUser] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [user, setUser] = useState<userType>(null);
  const [users, setUsers] = useState<UserInterface[] | null>(null);

  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loadingUser: boolean,
    errorMessage: ErrorType,
    users: UserInterface[] | null,
    user: userType = null
  ) => {
    setLoadingUser(loadingUser);
    setError(errorMessage);
    setUsers(users);
    setUser(user);
  };

  const handleGetUser = async (userId: string) => {
    try {
      setLoadingUser(true);
      const user = await getUser(userId);
      requestStatus(false, null, null, user);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetUsers = async () => {
    try {
      setLoadingUser(true);
      const users = await getUsers();
      requestStatus(false, null, users, null);
      return users;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleUpdateUser = useCallback(
    async (userFromClient: UserMapToModelEditType) => {
      try {
        setLoadingUser(true);
        const normalizedUser = normalizedEditUser(userFromClient);
        const userFomServer = await editUser(normalizedUser);
        requestStatus(false, null, null, userFomServer);
        snack("success", "The user has been successfully updated");
        // navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string")
          return requestStatus(false, error, null, null);
      }
    },
    []
  );
  const userValue = useMemo(() => {
    return { isLoadingUser, users, user, error };
  }, [isLoadingUser, users, user, error]);

  return { handleGetUser, handleUpdateUser, handleGetUsers, userValue };
};

export default useUser;
