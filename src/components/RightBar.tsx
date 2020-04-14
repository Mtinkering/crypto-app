/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const RightBar = (props: object) => (
  <div
    css={theme => css`
      background-color: ${theme.color.darkGrey};
    `}
    {...props}
  >
  </div>
)

export default RightBar;
