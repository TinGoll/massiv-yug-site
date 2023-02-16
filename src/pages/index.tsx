import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layout/Layout";
import HeaderWrapper from "../components/header/header-wrapper/header-wrapper";
import Banner from "../components/banner/banner";
import Product from "../components/product/product";
import Footer from "../components/footer/footer";
import AboutCompany from "../components/about-company/about-company";
import BlockDivider from "../components/block-divider/block-divider";
import Promotion from "../components/promotion/promotion";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout.Global>
      <Layout.Root>
        <HeaderWrapper />
        <Layout.Main>
          <Banner />
          <Product />
          <Promotion />
          <BlockDivider />
          <AboutCompany />
        </Layout.Main>
        <Footer />
      </Layout.Root>
    </Layout.Global>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Массив - Юг.</title>;
