/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMaskProps {
  middleware: (newValue: string) => string;
}

type AvailableMasks = "numbers";

export interface ICustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  mask?: AvailableMasks;
  pattern?: string;
  inputMode?:
    | "text"
    | "none"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;

  onChange?: (e: React.ChangeEvent<any>) => void;
}
