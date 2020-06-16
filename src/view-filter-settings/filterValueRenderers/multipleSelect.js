import React from 'react'
import MultipleSelectEditor from '../editors/MultipleSelectEditor'

export default (({ value, field, onChange }) => (
    <MultipleSelectEditor
        value={value}
        field={field}
        onChange={onChange}
    />
))