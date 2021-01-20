const importAll = (r) => {
    return r.keys().map(r)
}

const images = importAll(
    require.context('../images/icons', false, /\.(png|jpe?g|svg)$/)
)

export { images }
