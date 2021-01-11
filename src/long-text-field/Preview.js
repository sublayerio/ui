import React from 'react'
import { css, cx } from 'emotion'
import ReactMarkdown from 'react-markdown'
import defaultEmptyRenderer from './defaultEmptyRenderer';

export default class Preview extends React.Component {

    render() {
        
        if (!this.props.value) {
            return defaultEmptyRenderer()
        }

        return (
            <div
                className={css`
            background-color: #fff;
            padding: 16px;
            border: none;
            box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
            border-radius: 6px;
        `}
            >
                {this.renderContent()}
            </div>
        )
    }

    renderContent() {

        return (
            <ReactMarkdown
                renderers={{
                    image: props => (
                        <img
                            alt={''}
                            {...props}
                            className={css`
                                max-width: 100%;
                            `}
                        >
                            {props.children}
                        </img>
                    ),
                    link: props => (
                        <a
                            {...props}
                            className={css`
                                color: #07f;
                            `}
                        >{props.children}</a>
                    )
                }}
                className={cx(
                    'LongTextField__Preview',
                    css`
                        -moz-appearance: none;
                        -webkit-appearance: none;
                        -webkit-transition: border-color .15s ease-in-out;
                        appearance: none;
                        background-color: #fff;
                        display: block;
                        transition: border-color .15s ease-in-out;
                        width: 100%;
                        line-height: 1.5;
                        max-height: 600px;
                        overflow: hidden auto;
                    `
                )}
                source={this.props.value}
            />
        )
    }
}