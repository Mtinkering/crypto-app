/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function App() {
  return (
    <div>
      <div
        css={css`
          width: 100%;
          height: 30px;
          background-color: #356223;
        `}
      >  </div>
      <div
        css={css`
          @media screen and (min-width: 768px) {
            display: flex;
            justify-content: space-between;
          }
        `}
      >
        <div
          css={css`
            flex-basis: calc(2/3*(100% - 20px));
            height: 300px;
            background-color: #f8daa2;
            margin-top: 10px;
            order: 2;
          `}
        >
        </div>
        <div
          css={css`
            flex-basis: calc(1/6*(100% - 20px));
            order: 1;
            @media screen and (max-width: 768px) {
              display: flex;
              justify-content: space-between;
            }
          `}
        >
          <div
            css={css`
              flex-basis: calc(1/2*(100% - 10px));
              height: 145px;
              background-color: #4d960a;
              margin-top: 10px;
            `}
          >
          </div>
          <div
            css={css`
              flex-basis: calc(1/2*(100% - 10px));
              height: 145px;
              background-color: #877f87;
              margin-top: 10px;
            `}
          >
          </div>
        </div>
        <div
          css={css`
            flex-basis: calc(1/6*(100% - 20px));
            height: 300px;
            background-color: #eccc70;
            margin-top: 10px;
            order: 3;
          `}
        >
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          padding: 70px 0;
          background-color: #949012;
          margin-top: 10px;
          text-align: center;
        `}
      >
        <button
          css={css`
            background-image: linear-gradient(to right, #deab1c , #ffe94d);
            padding: 10px 30px;
            border-radius: 20px;
            border: none;
          `}
        > Click here!</button>
      </div>
    </div>
  );
}

export default App;
