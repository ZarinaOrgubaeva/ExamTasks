import { memo, useContext } from "react";
import styled from "styled-components";
import { ThemesContext, useTodoContext } from "../../context/ThemeProvider";
import { ThemeButton } from "../UI/ThemeButton";

export const Header = () => {
  const { theme } = useTodoContext();
  const context = useContext(ThemesContext);

  return (
    <>
      <HeaderStyled
        style={
          theme === "black"
            ? {
                backgroundColor: "#141516",
              }
            : {
                backgroundColor: "#99c7f5",
              }
        }
      >
        <ThemeButton color={"chartreuse"} onClick={context.setBlack}>
          Ночь
        </ThemeButton>
        <ThemeButton color={"chartreuse"} onClick={context.setWhite}>
          день
        </ThemeButton>
      </HeaderStyled>
    </>
  );
};
const HeaderStyled = styled.header`
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;
