import styles from "../styles/components/CSSTransformExamples.module.scss";

function CSSTransformExamples() {
  return (
    <div className={styles.container}>
      <h1>CSS Transforms</h1>

      <main>
        <section className={`${styles.card} ${styles.scale}`}>
          <h2>Scale</h2>
        </section>

        <section className={`${styles.card} ${styles.skew}`}>
          <h2>Skew</h2>
        </section>

        <section className={`${styles.card} ${styles.rotate}`}>
          <h2>Rotate</h2>
        </section>

        <section className={`${styles.card} ${styles.translate}`}>
          <h2>Translate</h2>
        </section>
      </main>
    </div>
  );
}

export default CSSTransformExamples;
