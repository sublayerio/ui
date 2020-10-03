import React from 'react'
import { css, keyframes } from 'emotion'

const spin = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`
const spinner = props => (
    <svg
        {...props}
        className={css`
            animation: 800ms linear -527ms infinite normal none running ${spin};
        `}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <radialGradient cx="97.483%" cy="28.573%" fx="97.483%" fy="28.573%" r="168.336%" gradientTransform="matrix(.9983 -.05822 .02352 .40335 -.005 .227)" id="a">
                <stop stopColor="currentColor" offset="0%" />
                <stop stopColor="currentColor" stopOpacity=".816" offset="18.426%" />
                <stop stopColor="currentColor" stopOpacity="0" offset="100%" />
            </radialGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z" stroke="url(#a)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="48.33 69.117" />
        </g>
    </svg>
)

export default spinner