const importAll = (r) => {
    return r.keys().map(r)
}

const images_dark = importAll(
    require.context('../images/icons', false, /\.(png|jpe?g|svg)$/)
)

const images_light = importAll(
    require.context('../images/icons-white', false, /\.(png|jpe?g|svg)$/)
)

export { images_dark, images_light }
