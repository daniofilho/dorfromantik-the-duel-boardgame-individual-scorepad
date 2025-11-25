export interface IStoreData {
  values: {
    forest: {
      primary: number;
      secondary: number;
    };
    grain: {
      primary: number;
      secondary: number;
    };
    village: {
      primary: number;
      secondary: number;
    };
    track: {
      primary: number;
      secondary: number;
    };
    stream: {
      primary: number;
      secondary: number;
    };
    wrapAround: {
      primary: number;
    };
    number: {
      primary: number;
    };
  };

  modules: {
    primary: number;
    secondary: number;
  };
}

export interface IStore extends IStoreData {
  get: () => IStoreData;

  setValue: (id: string, value: number, isPrimary: boolean) => void;
  setModule: (value: number, isPrimary: boolean) => void;
}

export interface IUseControllerProviderProps {
  children: React.ReactNode;
}

export interface IUseControllerContextProps extends Omit<IStore, "get"> {
  subTotal: {
    values: {
      primary: number;
      secondary: number;
    };

    modules: {
      primary: number;
      secondary: number;
    };
  };

  total: number;
}
