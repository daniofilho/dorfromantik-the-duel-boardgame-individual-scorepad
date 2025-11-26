/* eslint-disable @typescript-eslint/no-explicit-any */
const mapReducerActions = (reducerActions: any, dispatch: any): any => {
  const actions: Partial<any> = {};

  Object.keys(reducerActions).forEach((key) => {
    actions[key] = (params: any) => {
      dispatch({ type: key, params });
    };
  });
  return actions;
};
export default mapReducerActions;
