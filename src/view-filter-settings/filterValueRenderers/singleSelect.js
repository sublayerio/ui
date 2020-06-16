import React from 'react'
import SingleSelectEditor from '../editors/SingleSelectEditor'

export default (({ value, field, onChange }) => (
    <SingleSelectEditor
        value={value}
        field={field}
        onChange={onChange}
    />
))