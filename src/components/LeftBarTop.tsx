/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const LeftBarTop = (props: object) => (
  <div
    css={theme => css`
      background-color: ${theme.color.lightGreen};
    `}
    {...props}
  >
  </div>
)

export default LeftBarTop;
