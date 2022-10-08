import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const spellsReducer = createSlice({
  name: "spells",
  initialState,
  reducers: {
    listSpellsType: (state, action) => {
      console.log("action", action);
      return { ...state, ...{ listType: action.payload } };
    },
    listSpells: (state, action) => {
      return { ...state, ...{ list: action.payload } };
    },
    favListSpells: (state, action) => {
      console.log(action, "sharmi");
      let favList = [];
      return { ...state, ...{ favList: [...action.payload] } };
    },
    DetailedSpell: (state, action) => {
      return { ...state, ...{ DetailedSpellItem: action.payload } };
    },
  },
});

export const { listSpells, DetailedSpell, favListSpells, listSpellsType } =
  spellsReducer.actions;
export const reducer = spellsReducer.reducer;
