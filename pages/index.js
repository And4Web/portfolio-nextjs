import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anand Shukla</title>
        <meta
          name="description"
          content="Full stack development using latest and most efficient tech stacks. I use Javascript, Python for web/mobile development. React.js, Next.js, Node.js, Express.js, Django are some of my favorite technologies. Feel free to contact for app development for your business or organisation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
