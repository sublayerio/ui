import isString from 'lodash/isString'
import isNaN from 'lodash/isNaN'
import isNil from "lodash/isNil";

export default (input, { allowNegative, format, precision }) => {

    if (isNil(input)) {
        return null
    }

    if (!isString(input)) {
        throw new Error(`Input ${input} is not a string`)
    }

    if (format === 'decimal') {

        input = parseFloat(input)

        input = input.toFixed(precision)

        input = parseFloat(input)
    }

    if (format === 'integer') {
        input = parseInt(input, 10)
    }

    if (!allowNegative) {
        input = Math.abs(input)
    }

    if (isNaN(input)) {
        input = null
    }

    return input
}