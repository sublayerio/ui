import React from 'react'
import {css} from 'emotion'

export default {
    arrowDown: ({size}) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12">
            <path
                fillRule="evenodd"
                fill="currentColor"
                d="M3.6011,4.00002 L8.4011,4.00002 C8.8951,4.00002 9.1771,4.56402 8.8811,4.96002 L6.4811,8.16002 C6.2411,8.48002 5.7611,8.48002 5.5211,8.16002 L3.1211,4.96002 C2.8241,4.56402 3.1071,4.00002 3.6011,4.00002"/>
        </svg>
    ),
    close: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <path
                        d="M0.0392772977,6.67714061 L6.71641791,0 L100,93.2835821 L93.3228594,99.9607227 L0.0392772977,6.67714061 Z M93.2835821,0 L99.9607227,6.67714061 L6.67714061,99.9607227 L0,93.2835821 L93.2835821,0 Z"/>
                </g>
            </g>
        </svg>
    ),
    plus: (props) => {

        const className = css`
            fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.7px;
        `

        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.75 23.75">
                <line className={className} y1="11.87" x2="23.75" y2="11.87"/>
                <line className={className} x1="11.87" x2="11.87" y2="23.75"/>
            </svg>
        )
    }
}