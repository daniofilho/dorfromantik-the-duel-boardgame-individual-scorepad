import Image from "next/image";
import styles from "./styles.module.scss";
import { IRow } from "./types";
import Input from "@/components/Input";
import tryToConvertToNumber from "@/utils/tryToConvertToNumber";

export default function Row({
  text,
  id,
  secondaryDisabled,
  longestLabel,
  primary,
  secondary,
}: IRow) {
  return (
    <div className={styles.rowContainer}>
      <div>
        {text ? (
          <p>{text}</p>
        ) : (
          <Image src={`/images/${id}.png`} width={24} height={24} alt={id} />
        )}
      </div>

      <div>
        <Input
          name={`${id}_primary`}
          mask="numbers"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          value={String(primary.value)}
          onChange={(e) => primary.set(tryToConvertToNumber(e.target.value))}
        />
      </div>

      <div>
        {longestLabel && <span>~ ~ ~ ~ ~ ~</span>}

        <Input
          name={`${id}_secondary`}
          mask="numbers"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          disabled={secondaryDisabled}
          value={secondaryDisabled ? "" : String(secondary?.value || "0")}
          onChange={
            secondary
              ? (e) => secondary.set(tryToConvertToNumber(e.target.value))
              : undefined
          }
        />
      </div>
    </div>
  );
}
