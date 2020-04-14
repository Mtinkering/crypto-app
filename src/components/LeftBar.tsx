/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LeftBarTop from "./LeftBarTop";
import LeftBarBottom from "./LeftBarBottom";

const LeftBar = (props: object) => (
  <div
    css={css`
      @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    `}
    {...props}
  >
    <LeftBarTop
      css={css`
        flex-basis: calc(1/2*(100% - 10px));
        height: 145px;
        margin-top: 10px;
      `}
    />
    <LeftBarBottom
      css={css`
        flex-basis: calc(1/2*(100% - 10px));
        height: 145px;
        margin-top: 10px;
      `}
    />
  </div>
)

export default LeftBar;
