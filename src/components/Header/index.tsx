import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  
  const toggleButton = () => {
    setVisibility(!visible);
  };
  
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
  style={{ width: "180px" }}
  as="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLScsudvBrkdO99Jmf6ctEFwY-a_bhi54Eek5Cm0VUelsUa3pdg/viewform"
  target="_blank"
  rel="noopener noreferrer"
>
  <Span>
    <Button>{t("Newsletter")}</Button>
  </Span>
</CustomNavLinkSmall>

      </>
    );
  };
  
  return (
    <HeaderSection>
      <Container>
        <Row justify="center" align="middle">
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);