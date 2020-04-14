/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const LeftBarBottom = (props: object) => (
  <div
    css={theme => css`
      background-color: ${theme.color.lightGrey};
    `}
    {...props}
  >
  </div>
)

export default LeftBarBottom;
