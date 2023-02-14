import { Box, Typography } from "@mui/joy";
import React from "react";
import BlockWrapper from "../block-wrapper/block-wrapper";

const AboutCompany = () => {
  return (
    <section id="about-company">
      <BlockWrapper num="05" txt="О компании">
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
          качественная стильная мебель
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 4 }}>
          <Box sx={{ flexGrow: 1, width: "50%" }}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque ex magni quo. Blanditiis dignissimos, sint dolorum nisi
              deleniti ut necessitatibus. Minima, voluptate praesentium
              reprehenderit suscipit ullam sed blanditiis dolore corporis?
            </Typography>
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
            <Typography level="body2" sx={{ mt: 1 }}>
              Дизайн интерьера дома – это ваша индивидуальность, и центральное
              место здесь занимает качественная стильная мебель. Благодаря
              компании «МАССИВ-ЮГ» вы сами можете принять участие в создание
              своей мебели из массива, выбирая её стилистику, конфигурацию,
              цветовые решения и фурнитуру. Всё остальное сделаем мы.
            </Typography>
            <Typography level="body2" sx={{ mt: 1 }}>
              Мастерская «МАССИВ-ЮГ» специализируется на создании элитной
              качественной мебели, лестниц из массива натуральной древесины на
              заказ. Уже более десяти лет мы производим кухни, фасады, двери из
              массива и декоративные элементы из твёрдых пород дерева, таких как
              дуб, ольха, бук и ясень.
            </Typography>
            <Typography level="body2" sx={{ mt: 1 }}>
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
