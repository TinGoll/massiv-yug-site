import { Box, Typography, styled } from "@mui/joy";
import React from "react";
import BlockWrapper from "../block-wrapper/block-wrapper";
import ImgContainer from "../img-container/img-container";

import { StaticImage } from "gatsby-plugin-image";
import SvgBult from "./svg-bult";

const Svg = styled(SvgBult)((props) => ({
  position: "absolute",
  top: -10,
  left: 40,
}));

const AboutCompany = () => {
  return (
    <section id="about-company">
      <BlockWrapper num="05" txt="О компании">
        <Typography
          level="h3"
          sx={{
            fontSize: "55px",
            fontWeight: 600,
            lineHeight: "117.5%",
            textAlign: "center",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            mt: 3,
            fontFamily: "Orchidea Pro",
          }}
        >
          качественная стильная мебель
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 4 }}>
          <Box sx={{ flexGrow: 1, width: "50%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <ImgContainer sx={{ height: 366, width: 238 }}>
                <StaticImage
                  alt="О компании фото"
                  src="../../images/about-company/about_img1.jpg"
                  quality={70}
                  width={238}
                  height={366}
                />
              </ImgContainer>
              <ImgContainer sx={{ height: 366, width: 238 }}>
                <StaticImage
                  alt="О компании фото"
                  src="../../images/about-company/about_img2.jpg"
                  quality={70}
                  width={238}
                  height={366}
                />
              </ImgContainer>
            </Box>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Svg />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 21,
                  lineHeight: "149.5%",
                  maxWidth: 460,
                  textAlign: "justify",
                  marginLeft: "auto",
                  marginRight: "auto",
                  mt: 2,
                  ["& span"]: {
                    fontWeight: 600,
                  },
                }}
              >
                Расширяйте пространство, изменяйте геометрию помещения,
                создавайте акценты <br />
                <span>
                  — творите настоящие чудеса с помощью грамотного подбора мебели
                </span>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, width: "50%" }}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: "133%",
                letterSpacing: "-0.02em",
                color: "#000",
              }}
            >
              Наша компания <span className="selected-text">более 20 лет</span>{" "}
              занимается производством элитной мебели, дверей и лестниц из
              массива дуба, бука и ясеня.
            </Typography>
            <Typography level="body1" sx={{ mt: 3, fontSize: 16 }}>
              Дизайн интерьера дома – это ваша индивидуальность, и центральное
              место здесь занимает качественная стильная мебель. Благодаря
              компании «МАССИВ-ЮГ» вы сами можете принять участие в создание
              своей мебели из массива, выбирая её стилистику, конфигурацию,
              цветовые решения и фурнитуру. Всё остальное сделаем мы.
            </Typography>
            <Typography level="body1" sx={{ mt: 3, fontSize: 16 }}>
              Мастерская «МАССИВ-ЮГ» специализируется на создании элитной
              качественной мебели, лестниц из массива натуральной древесины на
              заказ. Уже более десяти лет мы производим кухни, фасады, двери из
              массива и декоративные элементы из твёрдых пород дерева, таких как
              дуб, ольха, бук и ясень.
            </Typography>
            <Typography level="body1" sx={{ mt: 3, fontSize: 16 }}>
              За время работы мы накопили огромный опыт и знания, позволяющие
              создавать не просто мебель, а настоящие произведения искусства,
              которые по достоинству оценят люди с хорошим вкусом, ценящие
              изысканность и стиль. Вся мебель, производящаяся в нашей
              мастерской, изготавливается из цельной древесины или массива, что
              видно даже невооружённым глазом простого обывателя. С лёгкой руки
              наших дизайнеров и мастеров, мы добавим в ваш дом больше эстетики
              и новые акценты в интерьере, создадим уникальный стиль и привнесём
              немного волшебства.
            </Typography>
          </Box>
        </Box>
      </BlockWrapper>
    </section>
  );
};

export default AboutCompany;
