import React from 'react'
import { css } from 'emotion'
import replaceLinebreaks from '../../replaceLinebreaks'
import defaultEmptyRenderer from '../../defaultEmptyRenderer';

export default class LongTextField extends React.Component {

    render() {

        const { value } = this.props

        if (!value) {
            return defaultEmptyRenderer()
        }

        return (
            <div
                className={css`
                    height: 74px;
                    padding: 0;
                    margin: 0;
                    vertical-align: top;
                    background: white;
                    outline: none;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    text-overflow: ellipsis;
                    overflow: visible;
                    position: relative;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        line-height: 1.5;
                    `}
                >
                    <div
                        className={css`
                            overflow: hidden;
                            position: relative;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            text-overflow: -o-ellipsis-lastline;
                            -webkit-line-clamp: 4;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        `}
                        style={{
                            maxHeight: 78
                        }}
                    >
                        {replaceLinebreaks(value)}
                    </div>
                </div>
            </div>
        )
    }
}