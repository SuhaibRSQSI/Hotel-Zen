import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import Hotelhaven_Logo from "../../public/Hotelhaven_Logo.png"
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src =Hotelhaven_Logo;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
