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
    //MODALS:
    //Auth
    //content
    //image
  },
});

export const {
  //general
  //modals
  //Auth
  //content
  //image
} = appSlice.actions;

export default appSlice.reducer;
