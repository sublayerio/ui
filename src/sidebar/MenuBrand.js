import React from "react";
import { css } from "emotion";
export default class MenuBrand extends React.Component {
    render() {
        const { imageFitTypeId, theme } = this.props;

        return (
            <div
                className={css`
          -ms-flex-align: center;
          -webkit-box-align: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          position: relative;
          width: 100;
          padding: 8px;
        `}
            >
                <div
                    className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${theme === "dark"
                            ? "rgba(255, 255, 255, 0)"
                            : "rgba(0, 0, 0, 0)"};
            border-radius: 6px;
            width: 100%;
            cursor: pointer;
            transition: background 200ms ease;
            &:hover {
              background-color: ${theme === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.1)"};
            }
          `}
                    onClick={this.props.onClick}
                >
                    <div
                        className={css`
              display: flex;
              align-items: center;
              padding: 12px 10px;
              transition: background 0.3s ease-in-out;
              overflow: hidden;
              width: 100%;
            `}
                    >
                        <div
                            className={css`
                -webkit-box-flex: 0;
                flex: 0 0 auto;
                height: 48px;
                margin-right: 12px;
                width: 48px;
                border-radius: 50%;
                overflow: hidden;
                border-radius: 50%;
                position: relative;
                background-color: #fff;
              `}
                        >
                            <div
                                className={css`
                                        position: absolute;
                                        top: ${imageFitTypeId === "cover"
                                        ? "0"
                                        : "10px"
                                    };
                                        bottom: ${imageFitTypeId === "cover"
                                        ? "0"
                                        : "10px"
                                    };
                                        left: ${imageFitTypeId === "cover"
                                        ? "0"
                                        : "10px"
                                    };
                                        right: ${imageFitTypeId === "cover"
                                        ? "0"
                                        : "10px"
                                    };
                                        background-size: ${imageFitTypeId === "cover"
                                        ? "cover"
                                        : "contain"
                                    };
                                        background-image: url('${this.props.imageUrl
                                    }');
                                        background-position: center center;
                                        background-repeat: no-repeat;
                                    `}
                            />
                        </div>
                        <div
                            className={css`
                -ms-flex: 1 1;
                -webkit-box-flex: 1;
                flex: 1 1;
                overflow: hidden;
                white-space: nowrap;
              `}
                        >
                            <div
                                className={css`
                  color: ${theme === "dark" ? "#fff" : "#000"};
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 19px;
                  margin-bottom: 0;
                  margin-top: 1px;
                  overflow: hidden;
                  text-align: left;
                  text-overflow: ellipsis;
                  max-width: 100%;
                `}
                            >
                                {this.props.title}
                            </div>
                            <div
                                className={css`
                  color: #b3b3b3;
                  font-size: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 100%;
                `}
                            >
                                {this.props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
