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

export type userType =
  | null
  | UserInterface
  | RegistrationForm
  | undefined
  | string;
// | NormalizedEditUser; //idk about this
type ErrorType = null | string;
// type usersType = userType[] | null;

const useUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [user, setuser] = useState<UserInterface | null>(null);
  const [users, setUsers] = useState<UserInterface[] | null>(null);

  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    user: userType,
    users: UserInterface[] | null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setuser(user);
    setUsers(users);
  };

  const handleGetUser = async (userId: string) => {
    try {
      setLoading(true);
      const user = await getUser(userId);
      requestStatus(false, null, user, null);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetUsers = async () => {
    try {
      setLoading(true);
      const users = await getUsers();
      requestStatus(false, null, null, users);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleUpdateUser = useCallback(
    async (userFromClient: UserMapToModelEditType) => {
      try {
        setLoading(true);
        const normalizedUser = normalizedEditUser(userFromClient);
        const userFomServer = await editUser(normalizedUser);
        requestStatus(false, null, userFomServer, null);
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
    return { isLoading, users, user, error };
  }, [isLoading, users, user, error]);

  return { handleGetUser, handleUpdateUser, handleGetUsers, userValue };
};

export default useUser;
