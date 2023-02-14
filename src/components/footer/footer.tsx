import { Box, Typography } from "@mui/joy";
import React from "react";
import Layout from "../../layout/Layout";
import * as styles from "./footer.module.scss";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Layout.Footer
      sx={{
        backgroundColor: "#333333",
        mt: 6,
      }}
    >
      <Layout.Container
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: 300, px: 2, my: 3 }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "white",
              fontSize: 24,
              textTransform: "uppercase",
            }}
          >
            Массив-юг
          </Typography>
          <Typography
            sx={{
              color: "#8F8FA3",
              lineHeight: "141.5%",
              fontWeight: 300,
              textAlign: "justify",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </Typography>
        </Box>
        <Box sx={{ width: 300, px: 2, color: "#8F8FA3", my: 3 }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
            }}
          >
            Навигация
          </Typography>
          <ul className={styles.NavigationList}>
            <li>
              <p>
                <Link to="#"> Продукция </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#"> Акции </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#"> Почему Вы? </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#"> Партнерам </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#"> О компании </Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#"> Контакты </Link>
              </p>
            </li>
          </ul>
        </Box>
        <Box sx={{ width: 300, px: 2, my: 3 }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
            }}
          >
            Информация
          </Typography>
          <Typography
            sx={{
              color: "#8F8FA3",
              lineHeight: "141.5%",
              fontWeight: 300,
              textAlign: "justify",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </Typography>
        </Box>

        <Box sx={{ width: 300, px: 2, my: 3 }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
            }}
          >
            Адрес
          </Typography>
          <Typography
            sx={{
              color: "#8F8FA3",
              lineHeight: "141.5%",
              fontWeight: 300,
              textAlign: "justify",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </Typography>
        </Box>
      </Layout.Container>
      <Box sx={{bgcolor: "#25252D", borderTop: "1px solid", borderTopColor: "divider"}}>
        <Typography sx={{ textAlign: "center", color: "#D8D8DF", py: 2 }}>
          Все права защищены 2023
        </Typography>
      </Box>
    </Layout.Footer>
  );
};

export default Footer;
