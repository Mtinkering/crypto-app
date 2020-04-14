/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Header = () => (
  <div
    css={theme => css`
    width: 100%;
    height: 30px;
    background-color: ${theme.color.darkGreen};
  `}
  ></div>
)

export default Header;
