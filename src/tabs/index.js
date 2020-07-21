import React from "react";
import { css, cx } from "emotion";

export const Tab = ({ index, active, onClick, children }) => (
  <div
    className={cx(
      css`
        -ms-flex: 0 0 auto;
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        margin: 0 15px;
        &:first-of-type {
          margin-left: 0;
        }
        &:last-of-type {
          margin-right: 0;
        }
      `
    )}
    onClick={onClick}
  >
    <button
      type="button"
      className={cx(
        css`
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-transition: background-color 0.1s ease-out;
          -webkit-user-select: none;
          background: transparent;
          border: 0;
          border-bottom: 2px solid transparent;
          border-radius: 0;
          color: #4d4d4d;
          display: block;
          font-size: 14px;
          letter-spacing: 0;
          line-height: 38px;
          padding: 0;
          text-align: center;
          text-decoration: none;
          transition: background-color 0.1s ease-out;
          user-select: none;
          white-space: nowrap;
          cursor: pointer;
          &:focus {
            outline: 0;
          }
        `,
        active
          ? css`
              border-color: #07f;
              color: #07f;
              position: relative;
            `
          : null
      )}
    >
      {children}
    </button>
  </div>
);

export const TabList = ({ children }) => (
  <div
    className={css`
      -ms-flex: 1 1;
      -webkit-box-flex: 1;
      -webkit-box-shadow: inset 0 -1px 0 #e3e3e3;
      box-shadow: inset 0 -1px 0 #e3e3e3;
      flex: 1 1;
      list-style-type: none;
      padding: 0;
      position: relative;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {children}
  </div>
);
