import React from 'react'
import { cx, css } from 'emotion'

export default class MenuItem extends React.Component {

    render() {

        const { icon, title, active, small, quiet, theme, onClick } = this.props

        return (
            <li
                className={css`
                    list-style: none;
                    padding: 0 8px;
                    margin-bottom: 4px;
                `}
            >
                <button
                    type={'button'}
                    title={title}
                    onClick={onClick}
                    className={cx(
                        css`
                        display: flex;
                        align-items: center;
                        padding: 14px 20px;
                        border-radius: 6px;
                        background-color: transparent;
                        border: none;
                        color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
                        display: flex;
                        width: 100%;
                        text-decoration: none;
                        transition: all .1s ease-out;
                        cursor: pointer;
                        font-weight: 500;
                        font-size: 15px;
                        text-align: left;
                        &:focus {
                            outline: none;
                        }
                        &:hover {
                            background-color: ${theme === 'dark' ? '#262626' : 'rgba(0, 0, 0, 0.1)'};
                            color: ${theme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
                        }
                    `,
                        theme === 'light' ? css`
                            color: #000;
                        ` : null,
                        small ? css`
                        padding-top: 8px;
                        padding-bottom: 8px;
                        color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
                        font-size: 14px;
                    ` : null,
                        active ? css`
                            background-color: rgb(var(--primaryColor));
                            color: #fff;
                            &:hover {
                                background-color: rgb(var(--primaryColorDarker));
                                color: #fff;
                            }
                        ` : null,
                        quiet ? css`
                            color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
                            &:hover {
                                color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
                            }
                        ` : null
                    )}
                >
                    {icon({
                        height: 16,
                        className: css`
                            display: flex;
                            margin-right: 12px;
                            opacity: .6;
                            transition: opacity .1s ease-out;
                            flex-shrink: 0;
                        `
                    })}
                    <div
                        className={css`
                        flex-grow: 1;
                        overflow: hidden;
                        `}
                    >
                        <div
                            className={css`
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 100%;
                                overflow: hidden;
                            `}
                        >
                            {title}
                        </div>
                    </div>
                </button>
            </li>
        )
    }
}