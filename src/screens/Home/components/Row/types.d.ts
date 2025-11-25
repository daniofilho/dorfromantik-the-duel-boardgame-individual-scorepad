export interface IRow {
  id: string;
  text?: string;
  secondaryDisabled?: boolean;
  longestLabel?: boolean;

  primary: {
    set: (value: number) => void;
    value: number;
  };

  secondary?: {
    set: (value: number) => void;
    value: number;
  };
}
