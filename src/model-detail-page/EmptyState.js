import React from "react";
import { css } from "emotion";

const EmptyState = ({ children }) => (
  <div
    className={css`
      background: #fff;
      border-radius: 6px;
      margin-bottom: 70px;
      padding: 50px 30px;
      text-align: center;
      border: 1px solid #f2f2f2;
      font-weight: bold;
    `}
  >
    {children}
  </div>
);

export default EmptyState;
