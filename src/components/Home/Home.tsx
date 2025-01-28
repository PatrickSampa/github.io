/* eslint-disable react-hooks/exhaustive-deps */
import * as Styled from "./styled.home";
import { ThemeProvider } from "../../Global/Theme";
import SettingsIcon from "@mui/icons-material/Settings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import * as React from "react";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import music from "../../music/preloader.mp3";

type HomeProps = {
  setIsDarkModeActive: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Home = ({
  setIsDarkModeActive,
  openMenu,
  setOpenMenu,
}: HomeProps) => {
  const [isMuted, setIsMuted] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [rotategear, setRotategear] = React.useState(false);
  const [rotateTheme, setRotateTheme] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    setOpenMenu(false);
    if (href === "#home-section") {
      const section = document.getElementById("home-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "#about-section") {
      const section = document.getElementById("about-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "#skills-section") {
      const section = document.getElementById("skills-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleRotation = () => {
    setRotategear(!rotategear);
    setShowButtons(!showButtons);
  };

  const toggleThemeAndMudeTeheme = () => {
    setRotateTheme(!rotateTheme);
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    if (isDarkMode) {
      setIsDarkModeActive(true);
    } else {
      setIsDarkModeActive(false);
    }
    setIsVisible(true);
  }, [isMuted, isDarkMode]);

  return (
    <Styled.HomeWrapper id="home-section">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <Styled.Context>
        <Styled.SlidingBackground isVisible={openMenu}>
          <Styled.MenuItens>
            <Styled.MenuList display="flex" gap="10rem" flexDirection="column">
              <Styled.MenuItem>
                <Styled.LinkOpenMenu
                  onClick={handleLinkClick}
                  href="#home-section"
                >
                  {"<Home />"}
                </Styled.LinkOpenMenu>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Styled.LinkOpenMenu
                  href="#about-section"
                  onClick={handleLinkClick}
                >
                  {"<About />"}
                </Styled.LinkOpenMenu>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Styled.LinkOpenMenu
                  href="#skills-section"
                  onClick={handleLinkClick}
                >
                  {"<Skills />"}
                </Styled.LinkOpenMenu>
              </Styled.MenuItem>
            </Styled.MenuList>
          </Styled.MenuItens>
        </Styled.SlidingBackground>
        <Styled.Text
          isVisible={isVisible}
          opacityNumber="1s"
          transformNumber="1s"
          transitionDelayNumber="0.4s"
          fontSize="2.3rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
          wordSpacing="1rem"
          fontSizeMobile="2.5rem"
        >
          {"Welcome(); I'm"}
        </Styled.Text>
        <Styled.Text
          isVisible={isVisible}
          opacityNumber="1s"
          transformNumber="1s"
          transitionDelayNumber="0.6s"
          fontSize="4rem"
          fontWeight="800"
          color={ThemeProvider.colors.secondary}
          wordSpacing="1rem"
          isKeyframes={true}
          keyframesColors={{
            colorTertiary: ThemeProvider.colors.tertiary,
            colorPrimary: ThemeProvider.colors.quaternary,
            colorSecondary: ThemeProvider.colors.quinary,
            colorQuaternary: ThemeProvider.colors.senary,
          }}
          fontSizeMobile="2rem"
        >
          Patrick Sampaio
        </Styled.Text>
        <Styled.Text
          isVisible={isVisible}
          opacityNumber="1s"
          transformNumber="1s"
          transitionDelayNumber="0.8s"
          fontSize="4rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
          fontSizeMobile="2rem"
        >
          I am Full Stack Developer
        </Styled.Text>
        <Styled.Paragraph
          isVisible={isVisible}
          opacityNumber="1s"
          transformNumber="1s"
          transitionDelayNumber="1s"
          width="70%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          Web Developer with experience in Digital Conceptual Arts, Frontend
          Design. Passionate about fun UIs, collaboration, and product creation.
        </Styled.Paragraph>
        <Styled.Paragraph
          isVisible={isVisible}
          opacityNumber="1s"
          transformNumber="1s"
          transitionDelayNumber="1.2s"
          width="70%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          I value simple content structures, clean design patterns, and
          thoughtful interactions.
        </Styled.Paragraph>
        <Styled.DivButtonAndConfig isVisible={isVisible}>
          <Styled.Link
            href="https://wa.me/5591982056718"
            target="_blank"
            textDecoration="none"
            backgroundColor="transparent"
          >
            <Styled.Button
              backgroundImage="linear-gradient(150deg, #71cbff, #8000ff, transparent);"
              color="white"
              padding="15px 55px"
              paddingMobile="15px 35px"
              border="none"
              borderRadius="10px"
              cursor="pointer"
              transition="all 0.1s ease"
              opacity="0.5"
              fontWeight="600"
              fontSize="0.9rem"
              isHover={true}
              hover={{
                transform: "scale(1.05)",
                opacity: "1",
              }}
            >
              Let's Talk!
            </Styled.Button>
          </Styled.Link>
          <Styled.ButtonConfig
            backgroundColor="transparent"
            border="none"
            cursor="pointer"
            rotate={rotategear}
            onClick={toggleRotation}
            width="27px"
            height="27px"
          >
            <SettingsIcon
              style={{ color: "white", width: "27px", height: "27px" }}
            />
          </Styled.ButtonConfig>
          <Styled.ButtonConfig
            backgroundColor="transparent"
            border="none"
            cursor="pointer"
            rotate={rotateTheme}
            onClick={toggleThemeAndMudeTeheme}
            width="22px"
            height="22px"
            display={showButtons ? "block" : "none"}
          >
            {isDarkMode ? (
              <Styled.ImageConfig
                src={moon}
                alt="moon"
                width="22px"
                height="22px"
              />
            ) : (
              <Styled.ImageConfig
                src={sun}
                alt="sun"
                width="22px"
                height="22px"
              />
            )}
          </Styled.ButtonConfig>
          <Styled.Button
            backgroundColor="transparent"
            border="none"
            cursor="pointer"
            onClick={() => setIsMuted(!isMuted)}
            display={showButtons ? "block" : "none"}
          >
            {isMuted ? (
              <VolumeMuteIcon
                style={{ color: "white", width: "27px", height: "27px" }}
              />
            ) : (
              <VolumeUpIcon
                style={{ color: "white", width: "27px", height: "27px" }}
              />
            )}
          </Styled.Button>
        </Styled.DivButtonAndConfig>
      </Styled.Context>
    </Styled.HomeWrapper>
  );
};
