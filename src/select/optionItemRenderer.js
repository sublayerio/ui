import React from 'react'

export default ({key, id, className, iconGetter, selected, option, icon, onClick, optionRenderer}) => (
    <div
        key={key}
        className={className}
        onClick={onClick}
    >
        {optionRenderer({iconGetter, selected, option, inList: true})}
    </div>
)
