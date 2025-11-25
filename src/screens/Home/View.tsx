import Image from "next/image";
import Row from "./components/Row";
import styles from "./styles.module.scss";
import { useController } from "./hooks/useController";

export default function View() {
  const { values, modules, setValue, setModule, subTotal, total } =
    useController();

  return (
    <>
      <header className={styles.header}>
        <h1>Dorfromantik - The Duel</h1>
        <h2>Individual Scorepad</h2>
      </header>

      <div className={styles.homeContainer}>
        <header className={styles.row}>
          <div></div>

          <div>
            <Image
              src={`/images/leftColumn.png`}
              width={24}
              height={24}
              alt="Left Column"
            />
          </div>

          <div>
            <Image
              src={`/images/rightColumn.png`}
              width={24}
              height={24}
              alt="Right Column"
            />
          </div>
        </header>

        <section>
          <Row
            id="forest"
            primary={{
              value: values.forest.primary,
              set: (num) => {
                console.log(num);
                setValue("forest", num, true);
              },
            }}
            secondary={{
              value: values.forest.secondary,
              set: (num) => setValue("forest", num, false),
            }}
          />

          <Row
            id="grain"
            primary={{
              value: values.grain.primary,
              set: (num) => setValue("grain", num, true),
            }}
            secondary={{
              value: values.grain.secondary,
              set: (num) => setValue("grain", num, false),
            }}
          />

          <Row
            id="village"
            primary={{
              value: values.village.primary,
              set: (num) => setValue("village", num, true),
            }}
            secondary={{
              value: values.village.secondary,
              set: (num) => setValue("village", num, false),
            }}
          />

          <Row
            id="track"
            longestLabel
            primary={{
              value: values.track.primary,
              set: (num) => setValue("track", num, true),
            }}
            secondary={{
              value: values.track.secondary,
              set: (num) => setValue("track", num, false),
            }}
          />

          <Row
            id="stream"
            longestLabel
            primary={{
              value: values.stream.primary,
              set: (num) => setValue("stream", num, true),
            }}
            secondary={{
              value: values.stream.secondary,
              set: (num) => setValue("stream", num, false),
            }}
          />

          <Row
            id="wrapAround"
            secondaryDisabled
            primary={{
              value: values.wrapAround.primary,
              set: (num) => setValue("wrapAround", num, true),
            }}
          />

          <Row
            id="number"
            secondaryDisabled
            primary={{
              value: values.number.primary,
              set: (num) => setValue("number", num, true),
            }}
          />
        </section>

        <section>
          <div className={styles.row}>
            <div>
              <p>=</p>
            </div>

            <div>
              <p>{subTotal.values.primary}</p>
            </div>

            <div>
              <p>{subTotal.values.secondary}</p>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.row}>
            <div></div>

            <div>
              <Image
                src={`/images/module1.png`}
                width={24}
                height={24}
                alt="Module 1"
              />
            </div>

            <div>
              <Image
                src={`/images/module2.png`}
                width={24}
                height={24}
                alt="Module 2"
              />
            </div>
          </div>

          <Row
            id="module"
            text="="
            primary={{
              value: modules.primary,
              set: (num) => setModule(num, true),
            }}
            secondary={{
              value: modules.secondary,
              set: (num) => setModule(num, false),
            }}
          />
        </section>

        <footer>
          <div className={styles.row}>
            <div>
              <p>=</p>
            </div>

            <div>
              <p>{total}</p>
            </div>
          </div>
        </footer>
      </div>

      <footer className={styles.footer}>
        <a href="https://daniofilho.com.br" target="_blank">
          by @daniofilho
        </a>
      </footer>
    </>
  );
}
