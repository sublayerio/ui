import React from 'react'
import { css } from 'emotion'


export default ({ iconGetter, selected, option, inList }) => {

    let icon = option.icon

    if (iconGetter) {
        icon = iconGetter({ option })
    }

    return (
        <div
            className={css`
            display: flex;
            align-items: center;
            width: 100%;
        `}
        >
            {inList && icon ? icon({
                height: 16,
                style: { marginRight: 8, color: selected ? '#fff' : '#6C9AEF', flexShrink: 0 }
            }) : null}
            <div
                className={css`
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        `}
            >
                {option.name ? option.name : option.id}
            </div>
        </div>
    )
}
