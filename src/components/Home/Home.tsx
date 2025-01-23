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
};

export const Home = ({ setIsDarkModeActive }: HomeProps) => {
  const [isMuted, setIsMuted] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [rotategear, setRotategear] = React.useState(false);
  const [rotateTheme, setRotateTheme] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

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
      setIsDarkModeActive((active) => !active);
    } else {
      setIsDarkModeActive((active) => !active);
    }
  }, [isMuted, isDarkMode]);

  return (
    <Styled.HomeWrapper id="home-section">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <Styled.Context>
        <Styled.Text
          fontSize="2.3rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
          wordSpacing="1rem"
        >
          {"Welcome(); I'm"}
        </Styled.Text>
        <Styled.Text
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
        >
          Patrick Sampaio
        </Styled.Text>
        <Styled.Text
          fontSize="4rem"
          fontWeight="700"
          color={ThemeProvider.colors.primary}
        >
          I am Full Stack Developer
        </Styled.Text>
        <Styled.Paragraph
          width="70%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          Web Developer with experience in Digital Conceptual Arts, Frontend
          Design. Passionate about fun UIs, collaboration, and product creation.
        </Styled.Paragraph>
        <Styled.Paragraph
          width="70%"
          fontSize="1.3rem"
          fontWeight="600"
          color="#ddd"
        >
          I value simple content structures, clean design patterns, and
          thoughtful interactions.
        </Styled.Paragraph>
        <Styled.DivButtonAndConfig>
          <Styled.Link
            href="https://wa.me/5591982056718"
            textDecoration="none"
            backgroundColor="transparent"
          >
            <Styled.Button
              backgroundImage="linear-gradient(150deg, #71cbff, #8000ff, transparent);"
              color="white"
              padding="15px 55px"
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
