"use client"
import React from 'react';
import { Banner, Company, Footer, News, Partners, Products, Services } from '@/components';

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