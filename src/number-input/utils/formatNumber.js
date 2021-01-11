import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default (input, { allowNegative, precision, format }) => {

    if (isNil(input)) {
        return null
    }

    if (!isNumber(input)) {
        throw new Error(`Input ${input} is not a number`)
    }

    if (isString(input)) return null

    if (!allowNegative) {
        input = Math.abs(input)
    }

    if (format === 'decimal') {

        input = parseFloat(input)

        input = input.toFixed(precision)
    }

    if (format === 'integer') {

        input = parseInt(input, 10)

        input = `${input}`
    }

    return input
}