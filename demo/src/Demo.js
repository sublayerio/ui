import React from 'react'
import { css } from 'emotion'
import Loading from './Loading'
import demos from './demos'

export default class Demo extends React.Component {

    state = {
        loading: true
    }

    componentDidUpdate(prevProps) {

        if (!this.state.loading && this.props.match.params.id !== prevProps.match.params.id) {

            this.setState({
                loading: true
            })
        }
    }

    handleLoadStart = () => this.setState({ loading: true })
    handleLoadStop = () => setTimeout(() => {
        this.setState({ loading: false })
    }, 200)

    render() {

        const { id } = this.props.match.params

        const demo = demos.find(demo => {
            return demo.id === id
        })

        if (!demo) {

            return (
                <div
                    className={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                    `}
                >
                    <div
                        className={css`
                            font-weight: 600;
                            font-size: 54px;
                        `}
                    >
                        Not found
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div
                    className={css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 100px;
                        background-color: #fff;
                        padding: 0 16px;
                        display: flex;
                        align-items: center;
                    `}
                >
                    <div
                        className={css`
                            flex-grow: 1;
                        `}
                    >
                        <div
                            className={css`
                                display: flex;
                                align-items: center;
                            `}
                        >
                            <div
                                className={css`
                                    font-size: 26px;
                                    font-weight: 800;
                                    margin-right: 8px;
                                `}
                            >
                                {demo.title}
                            </div>
                        </div>
                        <div
                            className={css`
                            color: rgb(153,153,153);
                            font-size: 12px;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                            `}
                        >
                            @sublayer/ui/{demo.id}
                        </div>
                    </div>
                    {/* <div>
                        <a 
                            href={demo.repo} 
                            target={'_blank'}
                            className={css`
                            color: #000;
                            font-size: 16px;
                            text-decoration: none;
                            `}
                        >
                            {github({width: 16})} Open in GitHub
                        </a>
                    </div> */}
                </div>
                <div
                    className={css`
                        position: absolute;
                        top: 100px;
                        right: 0;
                        left: 0;
                        bottom: 0;
                    `}
                >
                    <iframe
                        src={`${window.location.origin}/preview/${demo.id}`}
                        className={css`
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        border: none;
                    `}
                        onLoadStart={this.handleLoadStart}
                        onLoad={this.handleLoadStop}
                    />
                    {this.state.loading ? (
                        <Loading
                            message={demo.id}
                        />
                    ) : null}
                </div>
            </React.Fragment>
        )
    }
}