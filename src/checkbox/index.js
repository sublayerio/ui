import React from 'react'
import { css, cx } from 'emotion'

const checkmark = props => (
    <svg {...props} viewBox="0 0 10 9"><polygon fill="currentColor" fillRule="nonzero" points="0.911865754 4.18958751 0 5.38059584 4.07043813 8.49702503 9.08388576 0.820183351 7.82798 0 3.69857048 6.32315832"></polygon></svg>
)

const Checkbox = ({ value, onChange, trueLabel, falseLabel }) => {

    return (
        <div
            className={css`
                display: flex;
                align-items: center;
            `}
        >
            <div
                className={cx(
                    css`
            flex: 0 0 14px;
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 14px;
            background-color: #fff;
            height: 14px;
            border: 1px solid #b3b3b3;
            border-radius: 3px;
            color: #fff;
            -webkit-transition: .1s cubic-bezier(.455,.03,.515,.955);
            transition: .1s cubic-bezier(.455,.03,.515,.955);
            cursor: pointer;
            `,
                    value ? css`
            background: rgb(var(--primaryColor));
            border-color: rgb(var(--primaryColorDarker));
            ` : null
                )}
                onClick={e => {

                    if (onChange) {
                        onChange({
                            value: !value
                        })
                    }
                }}
            >
                {value ? checkmark({
                    width: 10,
                    className: css`
                position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
                `
                }) : null}
            </div>
            {(value && trueLabel) || (!value && falseLabel) ? (
                <div
                    className={css`
                    margin-left: 8px;
                    font-weight: 400;
                    line-height: 1.3;
                    color: ${value ? '#262626' : 'grey'}
                `}
                >
                    {value ? trueLabel : falseLabel}
                </div>
            ) : null}
        </div>
    )
}

export default Checkbox