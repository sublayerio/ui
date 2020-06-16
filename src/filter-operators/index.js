import { fromJS } from 'immutable'

const state = fromJS({
    "filterOperatorDatas": {
        "attachment/isNotEmpty": {
            "id": "attachment/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "defaultValue": null
        },
        "collaborator/isAnyOf": {
            "id": "collaborator/isAnyOf",
            "operatorId": "isAnyOf",
            "name": "is any of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "multipleCollaborator/hasNoneOf": {
            "id": "multipleCollaborator/hasNoneOf",
            "operatorId": "hasNoneOf",
            "name": "has none of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "checkbox/=": {
            "id": "checkbox/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "checkbox",
            "defaultValue": false
        },
        "singleSelect/=": {
            "id": "singleSelect/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "singleSelect",
            "defaultValue": null
        },
        "autonumber/!=": {
            "id": "autonumber/!=",
            "operatorId": "!=",
            "name": "!=",
            "editorId": "number",
            "defaultValue": null
        },
        "relationship/isEmpty": {
            "id": "relationship/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "attachment/filename": {
            "id": "attachment/filename",
            "operatorId": "filename",
            "name": "filename",
            "editorId": "text",
            "defaultValue": null
        },
        "collaborator/=": {
            "id": "collaborator/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "collaborator",
            "defaultValue": null
        },
        "relationship/isNotEmpty": {
            "id": "relationship/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "updatedTime/<": {
            "id": "updatedTime/<",
            "operatorId": "<",
            "name": "is before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "number/<": {
            "id": "number/<",
            "operatorId": "<",
            "name": "<",
            "editorId": "number",
            "defaultValue": null
        },
        "createdTime/!=": {
            "id": "createdTime/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "date/isWithin": {
            "id": "date/isWithin",
            "operatorId": "isWithin",
            "name": "is within",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "autonumber/>=": {
            "id": "autonumber/>=",
            "operatorId": ">=",
            "name": ">=",
            "editorId": "number",
            "defaultValue": null
        },
        "updatedTime/=": {
            "id": "updatedTime/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "multipleCollaborator/hasAllOf": {
            "id": "multipleCollaborator/hasAllOf",
            "operatorId": "hasAllOf",
            "name": "has all of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "number/=": {
            "id": "number/=",
            "operatorId": "=",
            "name": "=",
            "editorId": "number",
            "defaultValue": null
        },
        "text/=": {
            "id": "text/=",
            "operatorId": "=",
            "name": "=",
            "editorId": "text",
            "defaultValue": null
        },
        "attachment/isEmpty": {
            "id": "attachment/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "defaultValue": null
        },
        "longText/=": {
            "id": "longText/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "text",
            "defaultValue": null
        },
        "updatedTime/>": {
            "id": "updatedTime/>",
            "operatorId": ">",
            "name": "is after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "singleSelect/isEmpty": {
            "id": "singleSelect/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "number/>": {
            "id": "number/>",
            "operatorId": ">",
            "name": ">",
            "editorId": "number",
            "defaultValue": null
        },
        "createdCollaborator/isAnyOf": {
            "id": "createdCollaborator/isAnyOf",
            "operatorId": "isAnyOf",
            "name": "is any of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "autonumber/<=": {
            "id": "autonumber/<=",
            "operatorId": "<=",
            "name": "<=",
            "editorId": "number",
            "defaultValue": null
        },
        "createdTime/>=": {
            "id": "createdTime/>=",
            "operatorId": ">=",
            "name": "is on or after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "createdCollaborator/isNoneOf": {
            "id": "createdCollaborator/isNoneOf",
            "operatorId": "isNoneOf",
            "name": "is none of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "collaborator/isEmpty": {
            "id": "collaborator/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "multipleSelect/=": {
            "id": "multipleSelect/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "multipleSelect",
            "defaultValue": null
        },
        "createdTime/<=": {
            "id": "createdTime/<=",
            "operatorId": "<=",
            "name": "is on or before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "date/<": {
            "id": "date/<",
            "operatorId": "<",
            "name": "is before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "updatedTime/isWithin": {
            "id": "updatedTime/isWithin",
            "operatorId": "isWithin",
            "name": "is within",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "updatedTime/isEmpty": {
            "id": "updatedTime/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "createdCollaborator/=": {
            "id": "createdCollaborator/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "collaborator",
            "defaultValue": null
        },
        "date/=": {
            "id": "date/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "longText/isEmpty": {
            "id": "longText/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "date/!=": {
            "id": "date/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "createdCollaborator/!=": {
            "id": "createdCollaborator/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "collaborator",
            "defaultValue": null
        },
        "multipleCollaborator/isNotEmpty": {
            "id": "multipleCollaborator/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "number/isEmpty": {
            "id": "number/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "text/isEmpty": {
            "id": "text/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "date/>": {
            "id": "date/>",
            "operatorId": ">",
            "name": "is after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "multipleSelect/isEmpty": {
            "id": "multipleSelect/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "text/doesNotContain": {
            "id": "text/doesNotContain",
            "operatorId": "doesNotContain",
            "name": "does not contain",
            "editorId": "text",
            "defaultValue": null
        },
        "date/>=": {
            "id": "date/>=",
            "operatorId": ">=",
            "name": "is on or after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "longText/doesNotContain": {
            "id": "longText/doesNotContain",
            "operatorId": "doesNotContain",
            "name": "does not contain",
            "editorId": "text",
            "defaultValue": null
        },
        "multipleSelect/hasAllOf": {
            "id": "multipleSelect/hasAllOf",
            "operatorId": "hasAllOf",
            "name": "has all of",
            "editorId": "multipleSelect",
            "defaultValue": JSON.stringify([])
        },
        "createdTime/<": {
            "id": "createdTime/<",
            "operatorId": "<",
            "name": "is before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "text/!=": {
            "id": "text/!=",
            "operatorId": "!=",
            "name": "!=",
            "editorId": "text",
            "defaultValue": null
        },
        "number/!=": {
            "id": "number/!=",
            "operatorId": "!=",
            "name": "!=",
            "editorId": "number",
            "defaultValue": null
        },
        "collaborator/isNoneOf": {
            "id": "collaborator/isNoneOf",
            "operatorId": "isNoneOf",
            "name": "is none of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "date/<=": {
            "id": "date/<=",
            "operatorId": "<=",
            "name": "is on or before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "multipleCollaborator/hasAnyOf": {
            "id": "multipleCollaborator/hasAnyOf",
            "operatorId": "hasAnyOf",
            "name": "has any of",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "attachment/filetype": {
            "id": "attachment/filetype",
            "operatorId": "filetype",
            "name": "filetype",
            "editorId": "filetype",
            "defaultValue": "image/jpeg"
        },
        "longText/!=": {
            "id": "longText/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "text",
            "defaultValue": null
        },
        "date/isEmpty": {
            "id": "date/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null
        },
        "createdTime/=": {
            "id": "createdTime/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "updatedTime/!=": {
            "id": "updatedTime/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "createdTime/>": {
            "id": "createdTime/>",
            "operatorId": ">",
            "name": "is after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "multipleCollaborator/=": {
            "id": "multipleCollaborator/=",
            "operatorId": "=",
            "name": "is",
            "editorId": "multipleCollaborator",
            "defaultValue": JSON.stringify([])
        },
        "singleSelect/isNoneOf": {
            "id": "singleSelect/isNoneOf",
            "operatorId": "isNoneOf",
            "name": "is none of",
            "editorId": "multipleSelect",
            "defaultValue": null
        },
        "number/>=": {
            "id": "number/>=",
            "operatorId": ">=",
            "name": ">=",
            "editorId": "number",
            "defaultValue": null
        },
        "text/contains": {
            "id": "text/contains",
            "operatorId": "contains",
            "name": "contains",
            "editorId": "text",
            "defaultValue": null
        },
        "date/isNotEmpty": {
            "id": "date/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null
        },
        "collaborator/!=": {
            "id": "collaborator/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "collaborator",
            "defaultValue": null
        },
        "autonumber/<": {
            "id": "autonumber/<",
            "operatorId": "<",
            "name": "<",
            "editorId": "number",
            "defaultValue": null
        },
        "longText/contains": {
            "id": "longText/contains",
            "operatorId": "contains",
            "name": "contains",
            "editorId": "text",
            "defaultValue": null
        },
        "multipleSelect/hasNoneOf": {
            "id": "multipleSelect/hasNoneOf",
            "operatorId": "hasNoneOf",
            "name": "has none of",
            "editorId": "multipleSelect",
            "defaultValue": JSON.stringify([])
        },
        "updatedTime/>=": {
            "id": "updatedTime/>=",
            "operatorId": ">=",
            "name": "is on or after",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "autonumber/=": {
            "id": "autonumber/=",
            "operatorId": "=",
            "name": "=",
            "editorId": "number",
            "defaultValue": null
        },
        "number/<=": {
            "id": "number/<=",
            "operatorId": "<=",
            "name": "<=",
            "editorId": "number",
            "defaultValue": null
        },
        "multipleSelect/isNotEmpty": {
            "id": "multipleSelect/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "singleSelect/!=": {
            "id": "singleSelect/!=",
            "operatorId": "!=",
            "name": "is not",
            "editorId": "singleSelect",
            "defaultValue": null
        },
        "autonumber/>": {
            "id": "autonumber/>",
            "operatorId": ">",
            "name": ">",
            "editorId": "number",
            "defaultValue": null
        },
        "updatedTime/<=": {
            "id": "updatedTime/<=",
            "operatorId": "<=",
            "name": "is on or before",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "number/isNotEmpty": {
            "id": "number/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "multipleCollaborator/isEmpty": {
            "id": "multipleCollaborator/isEmpty",
            "operatorId": "isEmpty",
            "name": "is empty",
            "editorId": null,
            "defaultValue": null
        },
        "longText/isNotEmpty": {
            "id": "longText/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "relationship/doesNotContain": {
            "id": "relationship/doesNotContain",
            "operatorId": "doesNotContain",
            "name": "does not contain",
            "editorId": "text",
            "defaultValue": null
        },
        "text/isNotEmpty": {
            "id": "text/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "updatedTime/isNotEmpty": {
            "id": "updatedTime/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "multipleSelect/hasAnyOf": {
            "id": "multipleSelect/hasAnyOf",
            "operatorId": "hasAnyOf",
            "name": "has any of",
            "editorId": "multipleSelect",
            "defaultValue": JSON.stringify([])
        },
        "collaborator/isNotEmpty": {
            "id": "collaborator/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "singleSelect/isAnyOf": {
            "id": "singleSelect/isAnyOf",
            "operatorId": "isAnyOf",
            "name": "is any of",
            "editorId": "multipleSelect",
            "defaultValue": null
        },
        "singleSelect/isNotEmpty": {
            "id": "singleSelect/isNotEmpty",
            "operatorId": "isNotEmpty",
            "name": "is not empty",
            "editorId": null,
            "defaultValue": null
        },
        "createdTime/isWithin": {
            "id": "createdTime/isWithin",
            "operatorId": "isWithin",
            "name": "is within",
            "editorId": "date",
            "defaultValue": JSON.stringify({
                "modeId": "exactDate",
                "exactDate": null
            })
        },
        "relationship/contains": {
            "id": "relationship/contains",
            "operatorId": "contains",
            "name": "contains",
            "editorId": "text",
            "defaultValue": null
        }
    },
    "filterOperator": [
        "attachment/isNotEmpty",
        "collaborator/isAnyOf",
        "multipleCollaborator/hasNoneOf",
        "checkbox/=",
        "singleSelect/=",
        "autonumber/!=",
        "relationship/isEmpty",
        "attachment/filename",
        "collaborator/=",
        "relationship/isNotEmpty",
        "updatedTime/<",
        "number/<",
        "createdTime/!=",
        "date/isWithin",
        "autonumber/>=",
        "updatedTime/=",
        "multipleCollaborator/hasAllOf",
        "number/=",
        "text/=",
        "attachment/isEmpty",
        "longText/=",
        "updatedTime/>",
        "singleSelect/isEmpty",
        "number/>",
        "createdCollaborator/isAnyOf",
        "autonumber/<=",
        "createdTime/>=",
        "createdCollaborator/isNoneOf",
        "collaborator/isEmpty",
        "multipleSelect/=",
        "createdTime/<=",
        "date/<",
        "updatedTime/isWithin",
        "updatedTime/isEmpty",
        "createdCollaborator/=",
        "date/=",
        "longText/isEmpty",
        "date/!=",
        "createdCollaborator/!=",
        "multipleCollaborator/isNotEmpty",
        "number/isEmpty",
        "text/isEmpty",
        "date/>",
        "multipleSelect/isEmpty",
        "text/doesNotContain",
        "date/>=",
        "longText/doesNotContain",
        "multipleSelect/hasAllOf",
        "createdTime/<",
        "text/!=",
        "number/!=",
        "collaborator/isNoneOf",
        "date/<=",
        "multipleCollaborator/hasAnyOf",
        "attachment/filetype",
        "longText/!=",
        "date/isEmpty",
        "createdTime/=",
        "updatedTime/!=",
        "createdTime/>",
        "multipleCollaborator/=",
        "singleSelect/isNoneOf",
        "number/>=",
        "text/contains",
        "date/isNotEmpty",
        "collaborator/!=",
        "autonumber/<",
        "longText/contains",
        "multipleSelect/hasNoneOf",
        "updatedTime/>=",
        "autonumber/=",
        "number/<=",
        "multipleSelect/isNotEmpty",
        "singleSelect/!=",
        "autonumber/>",
        "updatedTime/<=",
        "number/isNotEmpty",
        "multipleCollaborator/isEmpty",
        "longText/isNotEmpty",
        "relationship/doesNotContain",
        "text/isNotEmpty",
        "updatedTime/isNotEmpty",
        "multipleSelect/hasAnyOf",
        "collaborator/isNotEmpty",
        "singleSelect/isAnyOf",
        "singleSelect/isNotEmpty",
        "createdTime/isWithin",
        "relationship/contains"
    ]
})

export default state.get('filterOperator').map(id =>
    state.getIn(['filterOperatorDatas', id])
)