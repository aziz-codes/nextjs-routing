import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Layout>
            <h2 className='mt-14'>Hell Home Page</h2>
          </Layout>
          
    </>
  )
}

export default Home
