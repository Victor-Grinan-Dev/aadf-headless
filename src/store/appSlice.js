import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    //general
    isLoading: true,
    search: "",
    error: "",
    message: "",

    //Modals

    //Auth

    //content, create content to save

    //image
  },

  reducers: {
    //general
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    //MODALS:
    //Auth
    //content
    //image
  },
});

export const {
  //general
  setIsLoading,
  setSearch,
  setError,
  setMessage,
  //modals
  //Auth
  //content
  //image
} = appSlice.actions;

export default appSlice.reducer;
