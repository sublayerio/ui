const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const hooks = {
    "button.click/example.button": async (e, { setLoading, label, setLabel }) => {
        setLoading(true)
        setLabel('Processing...')
        await sleep(5000)
        setLoading(false)
        setLabel(label)
    }
}

export default hooks