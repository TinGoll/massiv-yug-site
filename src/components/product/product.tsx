import { Box, Button, styled, Typography } from "@mui/joy";
import React from "react";
import BlockWrapper from "../block-wrapper/block-wrapper";
import { Link, useStaticQuery, graphql } from "gatsby";
import ImgContainer from "../img-container/img-container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./product.module.scss";

const ProductButton = styled(Button)((props) => ({
  borderRadius: "69px",
  minWidth: "145px",
  minHeight: "55px",
  fontSize: "21px",
  fontWeight: 600,
  lineHeight: "139%",
  textAlign: "center",
}));

const Product = () => {
  const data = useStaticQuery<GQLImage.RootObject>(graphql`
    query Product {
      allMdx {
        nodes {
          frontmatter {
            hero_image_alt
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <section id="product">
      <BlockWrapper num="01" txt="Продукция">
        <Typography
          level="h3"
          sx={{
            fontSize: "55px",
            fontWeight: 500,
            lineHeight: "117.5%",
            textAlign: "center",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            mt: 3,
          }}
        >
          Уникальная текстура <br /> натурального дерева
        </Typography>

        <Typography
          level="body1"
          sx={{
            lineHeight: "50px",
            fontWeight: 500,
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          подчеркнет неповторимый вкус, создаст уют и гармонию в вашем
          пространстве! <br /> Выберите конструктив, материал, цвет и текстуру
          или{" "}
          <Link color="rgba(47, 128, 237, 1)" to="#">
            расскажите нам о своих идеях.
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <ProductButton variant="outlined" color="neutral">
            Мебель
          </ProductButton>
          <ProductButton variant="outlined" color="neutral">
            Фасады
          </ProductButton>
          <ProductButton>Двери</ProductButton>
          <ProductButton variant="outlined" color="neutral">
            Лестницы
          </ProductButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            mt: 6,
          }}
        >
          {(data?.allMdx?.nodes || []).map((node) => {
            //@ts-ignore
            const image = getImage(node?.frontmatter?.hero_image || null);
            return (
              <ImgContainer key={node.id} title={node?.frontmatter?.title}>
                <GatsbyImage
                  image={image!}
                  alt={node?.frontmatter?.hero_image_alt || "Фото"}
                  className={styles.Img}
                />
                ;
              </ImgContainer>
            );
          })}
        </Box>
      </BlockWrapper>
    </section>
  );
};

export default Product;

declare module GQLImage {
  export interface Fallback {
    src: string;
    srcSet: string;
    sizes: string;
  }

  export interface Source {
    srcSet: string;
    type: string;
    sizes: string;
  }

  export interface Images {
    fallback: Fallback;
    sources: Source[];
  }

  export interface GatsbyImageData {
    layout: string;
    backgroundColor: string;
    images: Images;
    width: number;
    height: number;
  }

  export interface ChildImageSharp {
    gatsbyImageData: GatsbyImageData;
  }

  export interface HeroImage {
    childImageSharp: ChildImageSharp;
  }

  export interface Frontmatter {
    hero_image_alt: string;
    title: string;
    hero_image: HeroImage;
  }

  export interface Node {
    frontmatter: Frontmatter;
    id: string;
  }

  export interface AllMdx {
    nodes: Node[];
  }

  export interface RootObject {
    allMdx: AllMdx;
  }
}
