"use client";

/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, forwardRef, ChangeEvent } from "react";

import masks from "./masks";
import styles from "./styles.module.scss";
import { ICustomInputProps, IMaskProps } from "./types";

const Input = forwardRef<HTMLInputElement, ICustomInputProps>((props, ref) => {
  const { disabled = false, mask, value, type, onChange = () => {} } = props;

  const inputMask = useMemo(
    (): IMaskProps => ({
      middleware: mask ? masks[mask] : (val: string) => val,
    }),
    [mask]
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<any>) => {
      if (!e) return;

      if (!mask) return onChange(e);

      const newEvent = e;
      newEvent.target.value = inputMask.middleware(e.target.value || "");

      return onChange(newEvent);
    },
    [inputMask, mask, onChange]
  );

  // Filtrando propriedades que não podem ser enviadas para o <input />
  const fieldProps = useMemo(() => {
    const { ...rest } = props;
    return rest;
  }, [props]);

  const field = useCallback(
    () => (
      <input
        {...fieldProps}
        ref={ref || null}
        value={inputMask.middleware(value || "")}
        type={type}
        disabled={disabled}
        onChange={handleOnChange}
      />
    ),
    [fieldProps, ref, inputMask, value, type, disabled, handleOnChange]
  );

  return (
    <div className={`custom-input-container ${styles.wrapperContainer}`}>
      <>{field()}</>
    </div>
  );
});

export default Input;
