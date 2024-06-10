// pages/index.tsx
import Head from "next/head";
import HtmlRenderer from "../components/HtmlRenderer";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akesya</title>
        <meta name="Jatin" content="Akehsya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HtmlRenderer src="/index.html" />
    </div>
  );
};

export default Home;
