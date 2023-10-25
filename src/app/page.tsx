import { Banner, Products } from '@/components';
import React from 'react';

interface PageProps { }

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Banner />
      <Products />
    </>
  )
}

export default Page;