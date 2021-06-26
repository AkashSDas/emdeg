import styles from "../styles/components/IndexPage.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function IndexPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default IndexPage;
