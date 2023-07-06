import { createSlice } from "@reduxjs/toolkit";

export const featureToggleSlice = createSlice({
  name: "featureToggle",
  initialState: { 
    userProfile: false,
    appArea: false,
  },
  reducers: {},
});

export default featureToggleSlice.reducer;
