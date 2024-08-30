import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<
  User[],
  number,
  { rejectValue: string }
>("users/fetchUsers", async (count, { rejectWithValue }) => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await fetch(`${API_BASE_URL}/?results=${count}`);
    // const response = await fetch(`https://randomuser.me/api/invalid-endpoint`);
    if (!response.ok) {
      throw new Error("Network response was not ok. Check the endpoint.");
    }
    const data = await response.json();
    return data.results;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers(state) {
      state.users = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Failed to fetch users";
    });
  },
});

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
