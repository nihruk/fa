import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.pinkSpan}>NIHR</span> Funding and Awards
          </h1>
        </div>
      </main>
    </>
  );
}
