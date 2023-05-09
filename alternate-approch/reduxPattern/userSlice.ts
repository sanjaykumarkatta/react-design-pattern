import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    selectedUser: null,
    isLoading: true,
    error: '',
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUsers, selectUser, setError } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await loadAllUsers();
    dispatch(setUsers(users));
  } catch (error) {
    dispatch(setError(`${error}`));
  }
};

export const fetchUserDetails = (userId) => async (dispatch) => {
  try {
    const userDetails = await loadUserDetails(userId);
    dispatch(selectUser(userDetails));
  } catch (error) {
    console.error(error);
    dispatch(setError(`${error}`));
  }
};

export default usersSlice.reducer;
