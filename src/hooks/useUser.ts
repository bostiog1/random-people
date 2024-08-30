import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";
import { RootState, AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useUsers = () => {
  const [userCount, setUserCount] = useState("");
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Selectors to access users, loading, and error state from Redux store
  const users = useSelector((state: RootState) => state.users.users);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    const count = parseInt(userCount, 10);

    if (userCount === "") {
      setWarningMessage("Please enter a number of users");
      dispatch({ type: "users/clearUsers" });
      return;
    }

    if (isNaN(count) || count <= 0) {
      setWarningMessage("Please enter a positive number.");
      dispatch({ type: "users/clearUsers" });
      return;
    }

    setWarningMessage("");
    dispatch(fetchUsers(count));
  }, [userCount, dispatch]);

  useEffect(() => {
    if (error) {
      navigate("/error", { state: { message: error } });
    }
  }, [error, navigate]);

  // Handle input change and remove leading zeros
  // Memoize handleInputChange using useCallback
  const handleInputChange = useCallback((value: string) => {
    const strippedValue = value.replace(/^0+/, "");
    setUserCount(strippedValue);
  }, []);

  return {
    userCount,
    handleInputChange,
    warningMessage,
    users,
    loading,
    error,
  };
};
