import { ReactNode } from 'react'
import styles from './styles/Layout.module.css'
import Head from 'next/head'
import Image from 'next/image'


const name = 'Moiz Ghuman';
export const siteTitle = 'Next.js Sample Website';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container} >

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <div className={styles.image_container}>
                    <Image
                        priority
                        src='/images/moiz.jpg'
                        width={150}
                        height={150}
                        alt={''} />
                </div>
                <h1>Wasssupp!👋</h1>
            </header>

            <main className={styles.mainDiv}>
                {children}
            </main>

            {/* <button className={'buttonSax'}>
                <Link href={'/'} className='buttonFontColor'>Back to Home</Link>
            </button> */}


        </div>
    )
}
export default Layout