import React from "react";
import { css } from "emotion";

const Box = props => (
    <div
        className={css`
      position: relative;
      background-color: #fff;
      border-radius: 6px;
      border: 1px solid #ebebeb;
    `}
        style={{
            padding: props.p,
            marginBottom: props.mb
        }}
        {...props}
    >
        {props.children}
    </div>
);

export default Box;
