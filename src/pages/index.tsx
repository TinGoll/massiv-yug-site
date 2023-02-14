import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layout/Layout";
import HeaderWrapper from "../components/header/header-wrapper/header-wrapper";
import Banner from "../components/banner/banner";
import BlockWrapper from "../components/block-wrapper/block-wrapper";
import Product from "../components/product/product";
import Footer from "../components/footer/footer";
import AboutCompany from "../components/about-company/about-company";
import BlockDivider from "../components/block-divider/block-divider";

const IndexPage: React.FC<PageProps> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Layout.Global>
      <Layout.Root>
        <HeaderWrapper />
        <Layout.Main>
          <Banner />
          <Product />
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
