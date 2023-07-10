import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IUser = {
  name: string;
  memberSince: Date;
  foundingMember: boolean;
};

type IOneRepMax = {
  name: string;
  weight: string | null;
  slug: string;
};

type IUserProfileState = {
  user: IUser | null;
  oneRepMax: IOneRepMax[];
};

const initialState: IUserProfileState = {
  user: null,
  oneRepMax: [],
};

export const userProfile = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (
      state,
      action: PayloadAction<{ user: IUser; oneRepMax: IOneRepMax[] }>
    ) => {
      state.user = action.payload.user;
      state.oneRepMax = action.payload.oneRepMax;
    },
    updateOneRepMax: (
      state,
      action: PayloadAction<{ slug: string; weight: string }>
    ) => {
      const index = state.oneRepMax.findIndex(
        (oneRepMax) => oneRepMax.slug === action.payload.slug
      );

      if (index !== -1) {
        state.oneRepMax[index].weight = action.payload.weight;
      }
    },
  },
});

export const { setUserProfile, updateOneRepMax } = userProfile.actions;

export default userProfile.reducer;
