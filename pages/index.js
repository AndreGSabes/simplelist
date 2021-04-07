import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit modi
        quae quidem dolor dolorem magnam, perspiciatis quo doloremque
        exercitationem ea omnis dignissimos fuga rem, expedita, accusantium
        illo. Illo, libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit modi
        quae quidem dolor dolorem magnam, perspiciatis quo doloremque
        exercitationem ea omnis dignissimos fuga rem, expedita, accusantium
        illo. Illo, libero.
      </p>
      <Link href="/ninjas">
        <a>See ninja listing</a>
      </Link>
    </div>
  );
}
