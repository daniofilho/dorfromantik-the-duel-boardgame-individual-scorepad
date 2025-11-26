export interface ISetValueParams {
  id: string;
  value: number;
  isPrimary?: boolean;
}

export interface ISetModuleParams {
  value: number;
  isPrimary?: boolean;
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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

export interface IStoreActions {
  setValue: (params: ISetValueParams) => void;
  setModule: (params: ISetModuleParams) => void;
}

export interface IStoreReducer {
  state: IStoreData;
  actions: IStoreActions;
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface IUseControllerProviderProps {
  children: React.ReactNode;
}

export interface IUseControllerContextProps extends IStoreData, IStoreActions {
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
