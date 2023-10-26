import { Banner, Company, Footer, News, Partners, Products, Services } from '@/components';
import React from 'react';

interface PageProps { }

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Banner />
      <Products />
      <Services />
      <Company />
      <News />
      <Partners />
      <Footer />
    </>
  )
}

export default Page;