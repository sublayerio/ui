import React from 'react'
import {css} from 'emotion'

const Heading = ({children}) => (
    <h2
      className={css`
        font-weight: 400;
        font-size: 24px;
      `}
    >
      {children}
    </h2>
  )

export default Heading