import React from 'react'
import TextEditor from "./editors/TextEditor";
import NumberEditor from "./editors/NumberEditor";
import CheckboxEditor from "./editors/CheckboxEditor";
import DateEditor from "./editors/DateEditor";
import multipleSelect from "./filterValueRenderers/multipleSelect";
import singleSelect from "./filterValueRenderers/singleSelect";

const filterValueRenderer = (({ field, fieldId, editorId, operatorId, value, onChange }) => {

    const editors = {
        text: TextEditor,
        number: NumberEditor,
        checkbox: CheckboxEditor,
        date: DateEditor,
        multipleSelect,
        singleSelect
    }

    const Editor = editors[editorId]

    if (!Editor) {
        return null
    }

    return (
        <Editor
            field={field}
            fieldId={fieldId}
            operatorId={operatorId}
            value={value}
            onChange={onChange}
        />
    )
})

export default filterValueRenderer