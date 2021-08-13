import React from "react"
import { css } from 'emotion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Manager, Reference, Popper } from 'react-popper';
import Portal from '../portal'
import FieldTechnical from './FieldTechnical'
import Context from "../context";

const fieldSettingsRenderers = {
    singleSelect: props => (
        <div>
            {props.field.settings.options.map((option, i) => (
                <div key={i} className={css`display: flex; align-items: center; padding: 4px 0;`}>
                    <div className={css`flex-grow: 1; display: flex; align-items: center;`}>
                        <span className={css`white-space: nowrap; background-color: ${option.backgroundColor}; color: ${option.color}; padding: 2px 8px; border-radius: 99999px; font-size: 12px; margin-right: 8px;`}>
                            {option.name ? option.name : option.id}
                        </span>
                        {props.developerMode ? (
                            <span className={css`margin-left: auto; flex-shrink: 0; color: #787878; font-size: 11px;`}>
                                {option.id}
                            </span>
                        ) : null}
                    </div>
                    <span className={css`margin-left: 4px; white-space: pre-line; font-size: 12px; color: #333;`}>
                        {option.description}
                    </span>
                </div>
            ))}
        </div>
    )
}

const fieldSettingsRenderer = ({ field, developerMode }) => {

    const defaultRenderer = props => null

    const renderer = fieldSettingsRenderers[field.type] || defaultRenderer

    return renderer({
        field,
        developerMode
    })
}

const Tooltip = props => (
    <div
        className={css`
        background-color: #fff;
        box-shadow: 0 8px 24px rgba(149, 157, 165, .2);
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        width: 500px;
        overflow: hidden;
        `}
    >
        {props.children}
    </div>
)

export default class FieldTooltip extends React.Component {

    static contextType = Context

    static defaultProps = {
        placement: 'bottom'
    }

    state = {
        hover: false
    }

    handleMouseEnter = () => this.setState({ hover: true })
    handleMouseLeave = () => this.setState({ hover: false })

    render() {

        const { field } = this.props

        return (
            <Manager>
                <Reference>
                    {({ ref }) => (
                        <span ref={ref} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
                            {this.props.children}
                        </span>
                    )}
                </Reference>
                {this.state.hover ? (
                    <Popper placement={this.props.placement}>
                        {({ ref, style, placement, arrowProps }) => (
                            <Portal>
                                <div ref={ref} style={style} data-placement={placement} className={css`z-index:1300;`}>
                                    <Tooltip>
                                        <div
                                            className={css`
                                padding: 16px;
                                background-color: #fff;
                            `}
                                        >
                                            <div>
                                                <FieldTechnical field={field} />
                                            </div>
                                            <div className={css`margin-top: 8px; font-style: italic; color: #787878; font-size: 12px;`}>
                                                {field.description || 'Geen omschrijving'}
                                            </div>
                                        </div>
                                        {field.formulaDependencies || (field.settings && (this.context.developerMode || fieldSettingsRenderers[field.type])) ? (
                                            <div
                                                className={css`
                                padding: 16px;   
                                border-top: 1px solid #dfdfdf; 
                            `}
                                            >
                                                {field.formulaDependencies ? (
                                                    <React.Fragment>
                                                        <div>
                                                            <div className={css`font-weight: bold; margin-bottom: 8px;`}>
                                                                Formula
                                                            </div>
                                                            {field.formulaDependencies.map((name, i) => (
                                                                <span key={i} className={css`padding: 2px 6px; background-color: rgba(0, 0, 0, 0.1); color: rgb(102, 102, 102); border-radius: 3px; margin-right: 4px; margin-bottom: 4px; font-size: 12px;`}>
                                                                    {name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className={css`border: 1px solid #e0e0e0; border-radius: 3px; overflow: hidden; margin-top: 12px; font-size: 11px;`}>
                                                            <SyntaxHighlighter language="js" style={githubGist}>
                                                                {field.formulaFn}
                                                            </SyntaxHighlighter>
                                                        </div>
                                                    </React.Fragment>
                                                ) : null}
                                                {field.settings && fieldSettingsRenderers[field.type] ? fieldSettingsRenderer({ field, developerMode: this.context.developerMode }) : null}
                                                {this.context.developerMode ? (
                                                    <pre>
                                                        {JSON.stringify(field, null, 2)}
                                                    </pre>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </Tooltip>
                                    <div ref={arrowProps.ref} style={arrowProps.style} />
                                </div>
                            </Portal>
                        )}
                    </Popper>
                ) : null}
            </Manager>
        )
    }
}