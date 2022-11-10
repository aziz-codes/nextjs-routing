import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Layout>
            <h2 className='mt-14'>What are the major updates, Read from our <Link href="/blogs/" className='text-sky-600'>Blogs</Link></h2>
          </Layout>
          
    </>
  )
}

export default Home
