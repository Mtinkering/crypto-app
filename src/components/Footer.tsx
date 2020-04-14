/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Footer = () => (
  <div
    css={theme => css`
      width: 100%;
      padding: 70px 0;
      background-color: ${theme.color.darkYellow};
      margin-top: 10px;
      text-align: center;
    `}
  >
    <button
      css={theme => css`
        background-image: linear-gradient(to right, ${theme.color.lightOrange}, ${theme.color.darkOrange});
        padding: 10px 30px;
        border-radius: 20px;
        border: none;
      `}
    > Click here!</button>
  </div>
)

export default Footer;
