import { createSlice } from "@reduxjs/toolkit"; 

const setLightMode = { color: "black", backgroundImage: "url('/images/_5_Centimeters_Per_Second-image.jpg')", backgroundSize: 'cover' };
const setDarkMode = { color: "silver", backgroundImage: "url('/images/AnimeSky.jpg')", backgroundSize: 'cover' };

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: setLightMode },
  reducers: {
    darkMode: (state) => {
      state.value = setDarkMode;
    },
    lightMode: (state) => {
      state.value = setLightMode;
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;
export default themeSlice.reducer;