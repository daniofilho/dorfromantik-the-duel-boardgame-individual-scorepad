import { IStoreData } from "./types";

const initialState: IStoreData = {
  values: {
    forest: {
      primary: 0,
      secondary: 0,
    },
    grain: {
      primary: 0,
      secondary: 0,
    },
    village: {
      primary: 0,
      secondary: 0,
    },
    track: {
      primary: 0,
      secondary: 0,
    },
    stream: {
      primary: 0,
      secondary: 0,
    },
    wrapAround: {
      primary: 0,
    },
    number: {
      primary: 0,
    },
  },

  modules: {
    primary: 0,
    secondary: 0,
  },
};
export default initialState;
