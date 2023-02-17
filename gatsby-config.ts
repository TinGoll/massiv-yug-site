import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Массив Юг`,
    siteUrl: `https://massiv-yug.ru/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Массив-Юг.",
        short_name: "MYug",
        start_url: "/",
        background_color: "#F9F7F2",
        theme_color: "#F9F7F2",
        // Включает подсказку «Добавить на главный экран» и отключает пользовательский интерфейс браузера (включая кнопку «Назад»)
        display: "minimal-ui",
        // display: "standalone",
        icon: "src/images/icon.png", // Этот путь относится к корню сайта.
        // Необязательный атрибут, обеспечивающий поддержку проверки CORS.
        // Если вы не укажете опцию crossOrigin, CORS будет пропущен для манифеста.
        // Любое недопустимое ключевое слово или пустая строка по умолчанию означает `anonymous`
        // crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Orchidea Pro"],
          urls: ["/fonts/orchidea-pro/orchidea-pro.css"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
  ],
};

export default config;
