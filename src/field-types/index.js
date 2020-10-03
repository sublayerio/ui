import { fromJS } from 'immutable'

const state = fromJS({
    "fieldTypeDatas": {
        "button": {
            "id": "button",
            "name_nl": "Knop",
            "name": "Button"
        },
        "attachment": {
            "id": "attachment",
            "name_nl": "Bestanden & Media",
            "name": "Files & Media",
            "description": "Attachments allow you to add images, documents, or other files which can then be viewed or downloaded.",
            "operators": [
                "attachment/filename",
                "attachment/filetype",
                "attachment/isEmpty",
                "attachment/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "percentEmpty",
                "percentFilled",
                "totalAttachmentSize"
            ]
        },
        "checkbox": {
            "id": "checkbox",
            "name_nl": "Checkbox",
            "name": "Checkbox",
            "description": "A single checkbox that can be checked or unchecked.",
            "operators": [
                "checkbox/="
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "percentEmpty",
                "percentFilled"
            ]
        },
        "date": {
            "id": "date",
            "name_nl": "Datum & tijd",
            "name": "Date",
            "description": "Enter a date (e.g. 11/12/2013) or pick one from a calendar.",
            "operators": [
                "date/=",
                "date/!=",
                "date/<",
                "date/<=",
                "date/>",
                "date/>=",
                "date/isEmpty",
                "date/isNotEmpty",
                "date/isWithin"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique",
                "earliestDate",
                "latestDate",
                "dateRangeInDays",
                "dateRangeInMonths"
            ]
        },
        "relationship": {
            "id": "relationship",
            "name_nl": "Relatie",
            "name": "Relation",
            "description": "This field will link to records in the ${table} table.",
            "operators": [
                "relationship/contains",
                "relationship/doesNotContain",
                "relationship/isEmpty",
                "relationship/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "percentEmpty",
                "percentFilled"
            ]
        },
        "longText": {
            "id": "longText",
            "name_nl": "Content",
            "name": "Long text",
            "description": "A long text field that can span multiple lines.",
            "operators": [
                "longText/contains",
                "longText/doesNotContain",
                "longText/=",
                "longText/!=",
                "longText/isEmpty",
                "longText/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique"
            ]
        },
        "multipleSelect": {
            "id": "multipleSelect",
            "name_nl": "Multi-selecteer",
            "name": "Multiple select",
            "description": "Multiple select allows you to select one or more predefined options listed below.",
            "operators": [
                "multipleSelect/=",
                "multipleSelect/hasAllOf",
                "multipleSelect/hasAnyOf",
                "multipleSelect/hasNoneOf",
                "multipleSelect/isEmpty",
                "multipleSelect/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique"
            ]
        },
        "number": {
            "id": "number",
            "name_nl": "Nummer",
            "name": "Number",
            "description": "A number field with a specific format.",
            "operators": [
                "number/!=",
                "number/<",
                "number/<=",
                "number/=",
                "number/>",
                "number/>=",
                "number/isEmpty",
                "number/isNotEmpty"
            ],
            "summaryFunctions": [
                "sum",
                "average",
                "median",
                "min",
                "max",
                "range",
                "stDev",
                "histogram",
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique"
            ]
        },
        "text": {
            "id": "text",
            "name_nl": "Tekst",
            "name": "Single line text",
            "description": "A single line of text.",
            "operators": [
                "text/contains",
                "text/doesNotContain",
                "text/=",
                "text/!=",
                "text/isEmpty",
                "text/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique"
            ]
        },
        "singleSelect": {
            "id": "singleSelect",
            "name_nl": "Selecteer",
            "name": "Single select",
            "description": "Single select allows you to select a single option from predefined options in a dropdown.",
            "operators": [
                "singleSelect/=",
                "singleSelect/!=",
                "singleSelect/isAnyOf",
                "singleSelect/isEmpty",
                "singleSelect/isNoneOf",
                "singleSelect/isNotEmpty"
            ],
            "summaryFunctions": [
                "count",
                "countEmpty",
                "countFilled",
                "countUnique",
                "percentEmpty",
                "percentFilled",
                "percentUnique"
            ]
        }
    },
    "fieldType": [
        "button",
        "attachment",
        "checkbox",
        "date",
        "relationship",
        "longText",
        "multipleSelect",
        "number",
        "text",
        "singleSelect"
    ]
})

export default state.get('fieldType').map(id =>
    state.getIn(['fieldTypeDatas', id])
)