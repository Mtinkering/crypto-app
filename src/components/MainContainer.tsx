/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MainContent from "./MainContent";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const MainContainer = () => (
  <div
    css={css`
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    `}
  >
    <MainContent
      css={css`
        flex-basis: calc(2/3*(100% - 20px));
        order: 2;
        height: 300px;
        margin-top: 10px;
      `} />
    <LeftBar
      css={css`
        flex-basis: calc(1/6*(100% - 20px));
        order: 1;
      `}
    />
    <RightBar
      css={css`
        flex-basis: calc(1/6*(100% - 20px));
        height: 300px;
        margin-top: 10px;
        order: 3;
      `} />
  </div>
)

export default MainContainer;
