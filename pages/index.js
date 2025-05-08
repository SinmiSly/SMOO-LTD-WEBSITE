
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SMOO LTD</title>
      </Head>

      <header className={styles.header}>
        <Image src="/smoo-logo.png" alt="SMOO LTD Logo" width={120} height={40} />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>SMOO LTD</h1>
        <p className={styles.description}>Bringing Local British Brands to Global Amazon Customers</p>
        <a href="#" className={styles.button}>Visit Amazon Store</a>
        <div className={styles.card}>
          <h3>About Us</h3>
          <p>
            SMOO LTD is a UK-based Amazon retail business offering quality family run British brands.
            We source trusted consumable and non-consumable products across DIY, pet, baby, and safety categories.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Contact Us</h3>
          <p>37 Park Street, Farnworth, Bolton, BL4 7RE</p>
          <p>Email: purchasing@smoo.store</p>
          <p>Phone: +44 7936 663714</p>
        </div>
      </main>
    </div>
  );
}
