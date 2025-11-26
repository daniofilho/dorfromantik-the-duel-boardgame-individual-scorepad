"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import {
  IStoreActions,
  IStoreReducer,
  IUseControllerContextProps,
  IUseControllerProviderProps,
} from "./types";
import initialState from "./initialState";

import * as StoreReducer from "./reducer";
import mapReducerActions from "@/utils/mapReducerActions";

const UseControllerContext = createContext<IUseControllerContextProps>(
  {} as IUseControllerContextProps
);

const UseControllerProvider: React.FC<IUseControllerProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(StoreReducer.reducer, {
    ...initialState,
  });
  const actions: IStoreActions = useMemo(
    () => mapReducerActions(StoreReducer.actions, dispatch),
    []
  );
  const reducer: IStoreReducer = useMemo(
    () => ({ state, actions }),
    [actions, state]
  );

  const subTotal = useMemo(() => {
    const {
      values: { forest, grain, stream, track, village, wrapAround, number },
      modules,
    } = reducer.state;

    return {
      values: {
        primary:
          forest.primary +
          grain.primary +
          stream.primary +
          track.primary +
          village.primary +
          wrapAround.primary +
          number.primary,
        secondary:
          forest.secondary +
          grain.secondary +
          stream.secondary +
          track.secondary +
          village.secondary,
      },
      modules,
    };
  }, [reducer]);

  const total = useMemo(() => {
    return (
      subTotal.values.primary +
      subTotal.values.secondary +
      subTotal.modules.primary +
      subTotal.modules.secondary
    );
  }, [subTotal]);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const contextValue = useMemo(
    (): IUseControllerContextProps => ({
      ...reducer.state,
      ...reducer.actions,
      subTotal,
      total,
    }),
    [reducer.actions, reducer.state, subTotal, total]
  );

  return (
    <UseControllerContext.Provider value={contextValue}>
      {children}
    </UseControllerContext.Provider>
  );
};

const useController = (): IUseControllerContextProps => {
  const context = useContext(UseControllerContext);
  if (!context)
    throw new Error(
      "useController must be used within an UseControllerProvider"
    );
  return context;
};

export { UseControllerProvider, useController };
