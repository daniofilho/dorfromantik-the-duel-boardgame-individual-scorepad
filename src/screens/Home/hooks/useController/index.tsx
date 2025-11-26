import { createContext, useContext, useMemo } from "react";
import {
  IUseControllerContextProps,
  IUseControllerProviderProps,
} from "./types";
import { createStore } from "./store";

const UseControllerContext = createContext<IUseControllerContextProps>(
  {} as IUseControllerContextProps
);

const UseControllerProvider: React.FC<IUseControllerProviderProps> = ({
  children,
}) => {
  const store = createStore();

  const subTotal = useMemo(() => {
    const {
      values: { forest, grain, stream, track, village, wrapAround, number },
      modules,
    } = store.get();

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
  }, [store]);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
      values: store.get().values,
      modules: store.get().modules,
      subTotal,
      total,
      setValue: (id: string, value: number, isPrimary: boolean) =>
        store.setValue(id, value, isPrimary),
      setModule: (value: number, isPrimary: boolean) =>
        store.setModule(value, isPrimary),
    }),
    [store, subTotal, total]
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
