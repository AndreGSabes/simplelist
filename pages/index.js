import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit modi
          quae quidem dolor dolorem magnam, perspiciatis quo doloremque
          exercitationem ea omnis dignissimos fuga rem, expedita, accusantium
          illo. Illo, libero.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit modi
          quae quidem dolor dolorem magnam, perspiciatis quo doloremque
          exercitationem ea omnis dignissimos fuga rem, expedita, accusantium
          illo. Illo, libero.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  );
}
