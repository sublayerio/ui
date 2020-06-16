import React from 'react'
import {css} from 'emotion'

const Box = ({dark, children}) => (
    <div
      className={css`
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
      margin-bottom: 50px;
      background: ${dark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};
      border-radius: 5px;
      padding: 30px;
      transition: all 0.2s ease 0s;
      `}
    >
      {children}
    </div>
  )

export default Box