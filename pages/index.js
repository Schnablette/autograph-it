import Image from 'next/Image';
import { getPosts } from '../utils/mdx-utils';

import { Nav, Layout } from '../components';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import mockup from '../assets/Mockup.jpg';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Nav />
      <main>
        <Image
          className="rounded-xl mb-10"
          src={mockup}
          alt="App mockups on a phone and smart watch"
        />
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
