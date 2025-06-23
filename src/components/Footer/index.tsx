import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import {
  FooterSection,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  Large,
  Para,
  Chat,
  Extra,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={24} xs={24}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>{t("Do you have any question? Feel free to reach out.")}</Para>
              <a href="mailto:akbarishtiaque@gmail.com">
                <Chat>{t("Let's Chat")}</Chat>
              </a>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="center" align="middle" style={{ paddingTop: "3rem" }}>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/manchestermedtech/?hl=en"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/manchestermedtech"
                src="facebook.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/manchester-medtech/posts/?feedView=all"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
