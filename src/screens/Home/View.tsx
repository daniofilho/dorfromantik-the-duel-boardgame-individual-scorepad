import Image from "next/image";
import Row from "./components/Row";
import styles from "./styles.module.scss";
import { useController } from "./hooks/useController";

export default function View() {
  const { values, modules, setValue, setModule, subTotal, total } =
    useController();

  return (
    <article>
      <header className={styles.header}>
        <Image
          src="/images/logo.jpg"
          width={376}
          height={211}
          alt="Dorfromantik The Duel Boardgame Individual Scorepad"
        />
      </header>

      <div className={styles.homeContainer}>
        <header className={styles.row}>
          <div></div>

          <div>
            <Image
              src="/images/leftColumn.png"
              width={32}
              height={32}
              alt="Left Column"
            />
          </div>

          <div>
            <Image
              src="/images/rightColumn.png"
              width={32}
              height={32}
              alt="Right Column"
            />
          </div>
        </header>

        <section>
          <Row
            id="forest"
            primary={{
              value: values.forest.primary,
              set: (value) => {
                setValue({ id: "forest", value, isPrimary: true });
              },
            }}
            secondary={{
              value: values.forest.secondary,
              set: (value) => setValue({ id: "forest", value }),
            }}
          />

          <Row
            id="grain"
            primary={{
              value: values.grain.primary,
              set: (value) => setValue({ id: "grain", value, isPrimary: true }),
            }}
            secondary={{
              value: values.grain.secondary,
              set: (value) => setValue({ id: "grain", value }),
            }}
          />

          <Row
            id="village"
            primary={{
              value: values.village.primary,
              set: (value) =>
                setValue({ id: "village", value, isPrimary: true }),
            }}
            secondary={{
              value: values.village.secondary,
              set: (value) => setValue({ id: "village", value }),
            }}
          />

          <Row
            id="track"
            longestLabel
            primary={{
              value: values.track.primary,
              set: (value) => setValue({ id: "track", value, isPrimary: true }),
            }}
            secondary={{
              value: values.track.secondary,
              set: (value) => setValue({ id: "track", value }),
            }}
          />

          <Row
            id="stream"
            longestLabel
            primary={{
              value: values.stream.primary,
              set: (value) =>
                setValue({ id: "stream", value, isPrimary: true }),
            }}
            secondary={{
              value: values.stream.secondary,
              set: (value) => setValue({ id: "stream", value }),
            }}
          />

          <Row
            id="wrapAround"
            secondaryDisabled
            primary={{
              value: values.wrapAround.primary,
              set: (value) =>
                setValue({ id: "wrapAround", value, isPrimary: true }),
            }}
          />

          <Row
            id="number"
            secondaryDisabled
            primary={{
              value: values.number.primary,
              set: (value) =>
                setValue({ id: "number", value, isPrimary: true }),
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
                src="/images/module1.png"
                width={32}
                height={32}
                alt="Module 1"
              />
            </div>

            <div>
              <Image
                src="/images/module2.png"
                width={32}
                height={32}
                alt="Module 2"
              />
            </div>
          </div>

          <Row
            id="module"
            text="="
            primary={{
              value: modules.primary,
              set: (value) => setModule({ value, isPrimary: true }),
            }}
            secondary={{
              value: modules.secondary,
              set: (value) => setModule({ value }),
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
          @daniofilho
        </a>

        <span>/</span>

        <a
          href="https://github.com/daniofilho/dorfromantik-the-duel-boardgame-individual-scorepad"
          target="_blank"
        >
          Github
        </a>
      </footer>
    </article>
  );
}
