import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layout/Layout";
import HeaderWrapper from "../components/header/header-wrapper/header-wrapper";
import Banner from "../components/banner/banner";
import BlockWrapper from "../components/block-wrapper/block-wrapper";
import Product from "../components/product/product";

const IndexPage: React.FC<PageProps> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Layout.Global>
      <Layout.Root>
        <HeaderWrapper />
        <Layout.Main>
          <Banner />
          <Product />
        </Layout.Main>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout.Root>
    </Layout.Global>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Массив - Юг.</title>;
