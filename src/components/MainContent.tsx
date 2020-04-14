/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const MainContent = (props: object) => (
  <div
    css={theme => css`
      background-color: ${theme.color.lightYellow};
    `}
    {...props}
  >
  </div>
)

export default MainContent;
