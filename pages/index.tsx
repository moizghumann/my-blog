import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { PostData, getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import Button from '../components/Button';
import Link from 'next/link';
import button from '../components/styles/Button.module.css'
import usePokemon, { PokemonData } from '../lib/pokemon';
import { QueryClient, dehydrate } from '@tanstack/react-query';

// getStaticProps can only be exported from a page. You can’t export it from non-page files.
export const getStaticProps: GetStaticProps = () => {

  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery(['posts'], usePokemon)

  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
      // dehydratedState: dehydrate(queryClient)
    }
  }
}

interface HomeProps {
  allPostsData: PostData[]
}

const Home = ({ allPostsData }: HomeProps) => {

  // const { data, isLoading } = usePokemon();

  return (
    <div className={styles.container}>
      <Layout>

        <Head>
          <title>Moiz's Crib</title>
        </Head>

        <section>
          <div className={utilStyles.headingMd}>Hey! Im <strong>Moiz</strong>, a junior front end developer and a creative artist.</div>
          <div className={utilStyles.lightText}>You can contact me on
            <a href='https://twitter.com/ghumanmoiz'> Twitter</a>
            !
          </div>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {date}
              </li>
            ))}
          </ul>

          {/* <ul>
            {data ?
              data.results.map(pokemon => <li>{pokemon.name}</li>) :
              isLoading ? <p>Loading...</p> :
                <p>Unknown Error</p>}
          </ul> */}
        </section>

        <Button>
          <Link href={'/'} className={button.link}>
            Back to Home
          </Link>
        </Button>

      </Layout>
    </div>
  )
}

export default Home;