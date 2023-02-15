import React from "react";
import Layout from "../../../layout/Layout";
import HeaderLogo from "../header-logo/header-logo";
import Navigation from "../header-navigation/navigation";
import NavigationButton from "../header-navigation/navigation-button";
import NavigationItem from "../header-navigation/navigation-item";
import NavigationMenu from "../header-navigation/navigation-menu";
import NavigationToggleButton from "../header-navigation/navigation-toggle-button";

const HeaderWrapper = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [sticky, setSticky] = React.useState<boolean>(false);

  const scrollHandler = React.useMemo(
    () => (e: any) => {
      const scrollTop = e.target.documentElement.scrollTop; // Позиция скрола с от верха
      if (scrollTop > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    },
    []
  );

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <Layout.Header
      sx={[
        {
          background: sticky ? "#333333" : "none",
          transition: "0.5s ease-in-out",
          boxShadow: sticky ? "0 3px 3px rgba(0, 0, 0, 0.1)" : "none",
        },
      ]}
    >
      <Layout.Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <HeaderLogo
          sticky={+sticky}
          sx={{ marginRight: "auto", cursor: "pointer", paddingTop: "8px", paddingBottom: "8px" }}
        />
        <NavigationToggleButton
          aria-controls="primary-navigation"
          aria-expanded="false"
          size="lg"
          color="neutral"
          variant="plain"
          sticky={+sticky}
          toggle={+open}
          onClick={() => setOpen((tgl) => !tgl)}
        />
        <Navigation>
          <NavigationMenu sticky={sticky} open={open} id="primary-navigation">
            <NavigationItem sticky={sticky} to="#product">Продукция</NavigationItem>
            <NavigationItem sticky={sticky} to="#product">Акции</NavigationItem>
            <NavigationItem sticky={sticky} to="#product">Почему Вы?</NavigationItem>
            <NavigationItem sticky={sticky} to="#product">Партнерам</NavigationItem>
            <NavigationItem sticky={sticky} to="#about-company">О компании</NavigationItem>
            <NavigationItem sticky={sticky} to="#product">Контакты</NavigationItem>
            <NavigationButton fullWidth variant="outlined" color="neutral">
              ЛК Клиента
            </NavigationButton>
          </NavigationMenu>
        </Navigation>
      </Layout.Container>
    </Layout.Header>
  );
};

export default HeaderWrapper;
