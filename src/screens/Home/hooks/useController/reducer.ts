import { produce } from "immer";

import {
  IStoreData,
  ISetValueParams,
  ISetModuleParams,
  IStoreActions,
} from "./types";

const actions = {
  setValue: (state: IStoreData, params: ISetValueParams): void => {
    const { id, value, isPrimary = false } = params;

    const group = state.values[id as keyof typeof state.values];

    if (!group) return;

    if (isPrimary && "primary" in group) group.primary = value;
    else if (!isPrimary && "secondary" in group) group.secondary = value;
  },

  setModule: (state: IStoreData, params: ISetModuleParams): void => {
    const { isPrimary = false, value } = params;

    if (isPrimary) state.modules.primary = value;
    else state.modules.secondary = value;
  },
};

function reducer(
  state: IStoreData,
  action: IReducerGenericActions
): IStoreData {
  return produce(state, (draftState: IStoreData) => {
    switch (action.type) {
      case "setValue":
        return actions.setValue(draftState, action.params);

      case "setModule":
        return actions.setModule(draftState, action.params);

      default:
        return draftState;
    }
  });
}

export { actions, reducer };
