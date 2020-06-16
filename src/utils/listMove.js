/**
 * Move item inside a list to new index
 * @param {List} value
 * @param {int} oldI
 * @param {int} newI
 * @return {List}
 */
const listMove = (value, oldI, newI) => {
    if (!value || 0 > newI || value.size < newI) return value;

    const srcItem = value.get(oldI);
    return value.splice(oldI, 1).splice(newI, 0, srcItem);
};

export default listMove;