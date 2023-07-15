import Link from 'next/link'
import styles from '/styles/Home.module.css'
import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <div className={styles.header}>
          <h1>First Post</h1>
          <h3>
            <Link href={'/'}>go back to home</Link>
          </h3>
        </div>
      </Layout>
    </>
  )
}

export default FirstPost