import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool UI Next.js 模板</title>
        <meta name="description" content="Cool UI Next.js 应用模板" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎使用 <a href="#">Cool UI Next.js 模板!</a>
        </h1>

        <p className={styles.description}>
          这是一个 Next.js 项目模板
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Cool UI
        </a>
      </footer>
    </div>
  )
}
