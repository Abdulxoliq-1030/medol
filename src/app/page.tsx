import { Banner, Products, Services } from '@/components';
import React from 'react';

interface PageProps { }

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Banner />
      <Products />
      <Services />
    </>
  )
}

export default Page;