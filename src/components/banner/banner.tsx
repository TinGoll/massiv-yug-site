import { Box, styled, Typography, Button, TypographyProps } from "@mui/joy";
import React from "react";
import Layout from "../../layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./banner.module.scss";
import SvgGuarantee from "./SvgGuarantee";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0% {
    border-color: #fff;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: #fff;
  }
`;

export const BannerButton = styled(Button)((props) => ({
  marginTop: "34px",
  padding: "39px 73px",
  borderRadius: "193px",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "139%",
  textAlign: "center",
}));

const PrintedText = styled(Typography)((props) => ({
  fontFamily: "Orchidea Pro",
  fontWeight: 600,
  ["& span"]: {
    color: props.theme.palette.primary[500],
  },
}));

interface PrintedComponentProps extends TypographyProps {
  printedArray?: Array<string>;
  disabled?: boolean;
}

const PrintedComponent: React.FC<PrintedComponentProps> = ({
  printedArray = [],
  disabled,
  ...props
}) => {
  const [value, setValue] = React.useState<string>("");
  const [flash, setFlash] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timeShow = 2500;
    const speedClean = 100;
    const speedTyping = 200;
    const delay = 400;

    let operation: string = "show";
    let previusTime = Date.now();
    let index = 0;
    let cursor = printedArray[index].length - 1;
    setValue(printedArray[index]);

    let timer = 0;

    if (!printedArray || !printedArray.length || disabled) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const delta = Date.now() - previusTime;
      previusTime = now;
      timer += delta;

      if (operation === "show") {
        if (timer >= timeShow) {
          timer = 0;
          operation = "clean";
        }
      }

      if (operation === "clean") {
        setFlash(false);
        if (timer >= speedClean) {
          timer = 0;
          if (cursor > 0) {
            cursor--;
            setValue(printedArray[index].slice(0, cursor));
          } else {
            index = index + 1 > printedArray.length - 1 ? 0 : ++index;
            cursor = 0;
            operation = "delay";
            setFlash(true);
          }
        }
      }
      if (operation === "delay") {
        if (timer >= delay) {
          timer = 0;
          operation = "typing";
        }
      }

      if (operation === "typing") {
        setFlash(false);
        if (timer >= speedTyping) {
          timer = 0;
          cursor++;
          if (cursor <= printedArray[index].length) {
            setValue(printedArray[index].slice(0, cursor));
          } else {
            operation = "show";
            setFlash(true);
          }
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, [printedArray, disabled]);

  return (
    <PrintedText
      {...props}
      sx={[
        {
          whiteSpace: "nowrap",
          borderRight: `${4}px solid white`,
          animation: flash ? `${bounce} 1s step-end infinite` : "none",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {props.children}
      <span>{value}</span>
    </PrintedText>
  );
};

const Banner = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Layout.Container sx={{ position: "relative" }}>
        {/** Контент */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "1fr",
              md: "1fr 1fr",
            },
            gridTemplateRows: {
              sm: "auto",
              md: "1fr",
            },
            minHeight: "100vh",
          }}
        >
          <Box sx={{ color: "white", marginTop: "auto", marginBottom: "auto" }}>
            <PrintedComponent
              level="h1"
              disabled={false}
              printedArray={[" кухню", " мебель", " дверь", " лестницу"]}
              sx={{
                textTransform: "uppercase",
                color: "white",
                fontWeight: 600,
                lineHeight: "69px",
                display: "inline-block",
                paddingRight: "10px",
              }}
            >
              Вы получите
            </PrintedComponent>
            <Typography
              level="h1"
              sx={{
                textTransform: "uppercase",
                color: "white",
                fontWeight: 600,
                lineHeight: "69px",
                maxWidth: 600,
                fontFamily: "Orchidea Pro",
              }}
            >
              предвосхищающую все ожидания
            </Typography>
            <Typography
              level="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.78)",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: "133%",
              }}
            >
              до мельчайших подробностей!
            </Typography>
            <BannerButton>Рассчитать стоимость</BannerButton>
          </Box>
          <Box
            sx={{ color: "white", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                px: 10,
                py: 3,
              }}
            >
              <Box
                sx={{
                  width: "238px",
                  height: "345px",
                  borderRadius: "1000px",
                  overflow: "hidden",
                }}
              >
                <StaticImage
                  className={styles.StaticImage}
                  src="../../images/bg/bg_page_fasade_prew.jpg"
                  alt="Background cover prew"
                  quality={50}
                />
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                marginLeft: "auto",
                px: 10,
              }}
            >
              <Box
                sx={{
                  width: "238px",
                  height: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <SvgGuarantee width={130} />
              </Box>
            </Box>

            <Box sx={{ marginLeft: "auto", px: 10 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <StaticImage
                  src="../../images/my-orange-icon.png"
                  width={110}
                  alt="Massiv Yug Icon"
                  quality={50}
                />
                <Typography level="body1" sx={{ color: "white", width: "60%" }}>
                  Вы экономите свое время, потому что мы используем только
                  передовые технологии в производстве изделий
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout.Container>

      {/** Затемняющая область */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
        className={`${styles.bg} ${styles.inverted}`}
      ></Box>
      {/** Картинка */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
          zIndex: -2,
        }}
      >
        <StaticImage
          className={styles.StaticImage}
          src="../../images/bg/bg_page_fasade.jpg"
          alt="Background cover"
          quality={70}
        />
      </Box>
    </Box>
  );
};

export default Banner;
