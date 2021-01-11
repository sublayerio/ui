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
                    max-width: 100%;
                    overflow: hidden;
                    display: inline-flex;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 100%;
                    align-items: center;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                    `}
                >
                    <div
                        className={css`
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        {replaceLinebreaks(value)}
                    </div>
                </div>
            </div>
        )
    }
}