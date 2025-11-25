import { create } from "zustand";
import { IStore } from "./types";

export const createStore = create<IStore>((set, get) => ({
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

  // Valores
  setValue: (id, value, isPrimary) => {
    set((state) => {
      const group = state.values[id as keyof typeof state.values];

      if (!group) return state;

      if (isPrimary && "primary" in group) group.primary = value;
      else if (!isPrimary && "secondary" in group) group.secondary = value;

      return {
        ...state,
        values: {
          ...state.values,
          [id]: group,
        },
      };
    });
  },

  // Módulos
  setModule: (value, isPrimary) => {
    set((state) => {
      if (isPrimary) state.modules.primary = value;
      else state.modules.secondary = value;

      return {
        ...state,
        modules: {
          ...state.modules,
        },
      };
    });
  },

  get,
}));
