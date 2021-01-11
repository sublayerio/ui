export default input => {
    if (!input) return input
    return input.replace(new RegExp(/\n+/, 'g'), ' ')
}