import Image from "next/image";
import styles from "./page.module.css";
import logo from "./lugaggeLogo.svg";
import hero from "./bg.svg";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (

    <div className={styles.container}>
          <head>
          <title>Luggage</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </head>
      <div className={styles.navbar}>
        <Image  
          src={logo}
          alt="logo"
          width={160}
          height={50}
        />
        <div className={styles.navbarLinks}>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">About us</a>
      </div>
      </div>
      <div className={styles.content}>
        <div className={styles.herobanner}>
          <h1>Travel the world <br/>more easily</h1>
          <p>Get your luggage delivered to your destination</p>
          <Link href="https://ycfam1lw21x.typeform.com/to/jzWdzOzp" className={styles.button}>Get started</Link>
        </div>
      </div>
    </div>
  );
}
